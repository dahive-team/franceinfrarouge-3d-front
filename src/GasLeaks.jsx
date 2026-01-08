import { memo, useMemo, useRef } from "react";
import { NormalBlending, DynamicDrawUsage } from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const rand = (min, max) => min + Math.random() * (max - min);

// Fonction de normalisation rapide
function normalize3(x, y, z) {
  const len = Math.hypot(x, y, z) || 1;
  return [x / len, y / len, z / len];
}

// Fonction pour générer des particules dans un disque sans trigonométrie
function randomInDisk(rMax) {
  let x, z;
  do {
    x = (Math.random() * 2 - 1) * rMax;
    z = (Math.random() * 2 - 1) * rMax;
  } while (x * x + z * z > rMax * rMax);
  return [x, z];
}

// Génère une direction aléatoire dans un cône
function randomCone(dx, dy, dz, spread) {
  const nx = dx + rand(-spread, spread);
  const ny = dy + rand(-spread, spread);
  const nz = dz + rand(-spread, spread);
  return normalize3(nx, ny, nz);
}

// Définition des fuites
const LEAKS = [
  {
    origin: [15.5, 2, 17.5],
    direction: [1, 8, 0.2],
  },
  {
    origin: [21.5, 2, 17.5],
    direction: [1, 8, 0],
  },
];

function GasLeaks({ count = 160, size = 0.9, opacity = 0.7, updateFps = 30 }) {
  const ref = useRef(null);
  const tex = useTexture("/particle-gas.png");

  // Pré-calcul des valeurs statiques
  const data = useMemo(() => {
    const leakCount = LEAKS.length;

    const ox = new Float32Array(leakCount);
    const oy = new Float32Array(leakCount);
    const oz = new Float32Array(leakCount);

    const dx = new Float32Array(leakCount);
    const dy = new Float32Array(leakCount);
    const dz = new Float32Array(leakCount);

    const spread = new Float32Array(leakCount);
    const speedArr = new Float32Array(leakCount);
    const dragArr = new Float32Array(leakCount);
    const jitterArr = new Float32Array(leakCount);
    const maxDist2 = new Float32Array(leakCount);

    const lifeMin = new Float32Array(leakCount);
    const lifeMax = new Float32Array(leakCount);

    for (let i = 0; i < leakCount; i++) {
      const l = LEAKS[i] ?? {};

      const o = l.origin ?? [0, 0, 0];
      ox[i] = o[0];
      oy[i] = o[1];
      oz[i] = o[2];

      const d = l.direction ?? [1, 0, 0];
      const nd = normalize3(d[0], d[1], d[2]);
      dx[i] = nd[0];
      dy[i] = nd[1];
      dz[i] = nd[2];

      spread[i] = l.spread ?? 0.12;
      speedArr[i] = l.speed ?? 2.0;
      dragArr[i] = l.drag ?? 0.25;
      jitterArr[i] = l.jitter ?? 0.03;

      const md = l.maxDistance ?? 6;
      maxDist2[i] = md * md;

      const life = l.life ?? [0.6, 1.4];
      lifeMin[i] = life[0];
      lifeMax[i] = life[1];
    }

    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const ages = new Float32Array(count);
    const lifes = new Float32Array(count);
    const leakIndex = new Uint16Array(count); // à quelle fuite appartient la particule

    function spawn(i, li) {
      const idx = i * 3;

      const j = jitterArr[li];

      // petit jitter local (autour de l’origine)
      const [jx, jz] = randomInDisk(j);

      positions[idx] = ox[li] + jx;
      positions[idx + 1] = oy[li] + rand(-j, j);
      positions[idx + 2] = oz[li] + jz;

      const dir = randomCone(dx[li], dy[li], dz[li], spread[li]);
      const v = speedArr[li] * rand(0.75, 1.15);

      velocities[idx] = dir[0] * v;
      velocities[idx + 1] = dir[1] * v;
      velocities[idx + 2] = dir[2] * v;

      ages[i] = 0;
      lifes[i] = rand(lifeMin[li], lifeMax[li]);
    }

    // init (round-robin)
    for (let i = 0; i < count; i++) {
      const li = i % leakCount;
      leakIndex[i] = li;
      spawn(i, li);
    }

    return {
      leakCount,
      ox,
      oy,
      oz,
      dx,
      dy,
      dz,
      spread,
      speedArr,
      dragArr,
      maxDist2,
      positions,
      velocities,
      ages,
      lifes,
      leakIndex,
      spawn,
    };
  }, [count]);

  const acc = useRef(0);

  useFrame((_, delta) => {
    const geom = ref.current?.geometry;
    if (!geom) return;

    // throttle pour réduire les mises à jour excessives
    const step = updateFps >= 60 ? 0 : 1 / Math.max(1, updateFps);
    if (step > 0) {
      acc.current += delta;
      if (acc.current < step) return;
      delta = acc.current;
      acc.current = 0;
    }

    const dt = Math.min(delta, 0.033);

    const pos = data.positions;
    const vel = data.velocities;
    const ages = data.ages;
    const lifes = data.lifes;
    const liArr = data.leakIndex;

    let dirty = false;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const li = liArr[i];

      ages[i] += dt;

      const dragFactor = Math.max(0, 1 - data.dragArr[li] * dt);
      vel[idx] *= dragFactor;
      vel[idx + 1] *= dragFactor;
      vel[idx + 2] *= dragFactor;

      pos[idx] += vel[idx] * dt;
      pos[idx + 1] += vel[idx + 1] * dt;
      pos[idx + 2] += vel[idx + 2] * dt;

      const dx = pos[idx] - data.ox[li];
      const dy = pos[idx + 1] - data.oy[li];
      const dz = pos[idx + 2] - data.oz[li];
      const dist2 = dx * dx + dy * dy + dz * dz;

      if (ages[i] > lifes[i] || dist2 > data.maxDist2[li]) {
        data.spawn(i, li);
      }

      dirty = true;
    }

    if (dirty) geom.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={data.positions}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>

      <pointsMaterial
        map={tex}
        transparent
        alphaTest={0.02}
        opacity={opacity}
        depthWrite={false}
        blending={NormalBlending}
        size={size}
        sizeAttenuation
      />
    </points>
  );
}

export default memo(GasLeaks);
