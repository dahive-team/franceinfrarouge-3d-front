import { AdditiveBlending, NormalBlending, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";

const rand = (min, max) => min + Math.random() * (max - min);

export default function Smoke({
  count = 130,
  origin = [0, 0, 0],
  radius = 0.2,
  height = 1.5,
  size = 2.5,
  speed = 0.004,
  isFire = false,
}) {
  const pointsRef = useRef();
  const fireTex = useTexture("/particle-flame.png");
  const smokeTex = useTexture("/particle-smoke.png");
  const sprite = isFire ? fireTex : smokeTex;

  // ✅ Création des buffers UNE SEULE FOIS tant que `count` ne change pas
  const { positions, velocities, ages, lifes, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const ages = new Float32Array(count);
    const lifes = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      spawn(i, positions, velocities, ages, lifes);
      const idx = i * 3;

      if (isFire) {
        // couleur de base du feu (orange)
        colors[idx] = 1.0; // R
        colors[idx + 1] = 0.6; // G
        colors[idx + 2] = 0.2; // B
      } else {
        // fumée : gris
        colors[idx] = 0.6;
        colors[idx + 1] = 0.6;
        colors[idx + 2] = 0.6;
      }
    }

    return { positions, velocities, ages, lifes, colors };
    // 👇 seul `count` est pris en compte → pas de recréation sur changement de state parent
  }, [count]);

  function spawn(i, positions, velocities, ages, lifes) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * radius;
    const x = origin[0] + Math.cos(a) * r;
    const y = origin[1];
    const z = origin[2] + Math.sin(a) * r;
    const idx = i * 3;

    positions[idx] = x;
    positions[idx + 1] = y;
    positions[idx + 2] = z;

    velocities[idx] = rand(-0.15, 0.15);
    velocities[idx + 1] = rand(0.9, 9.6);
    velocities[idx + 2] = rand(-0.15, 0.15);

    ages[i] = 0;
    lifes[i] = rand(0.6, 1.1);
  }

  useFrame((_, delta) => {
    const geom = pointsRef.current?.geometry;
    if (!geom) return;
    const dt = Math.min(delta, speed);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      ages[i] += dt;

      if (ages[i] > lifes[i] || positions[idx + 1] > origin[1] + height) {
        // respawn particule
        spawn(i, positions, velocities, ages, lifes);

        // reset couleur de départ
        if (isFire) {
          colors[idx] = 1.0;
          colors[idx + 1] = 0.6;
          colors[idx + 2] = 0.2;
        } else {
          colors[idx] = 0.6;
          colors[idx + 1] = 0.6;
          colors[idx + 2] = 0.6;
        }
        continue;
      }

      // mouvement
      positions[idx] += velocities[idx] * dt;
      positions[idx + 1] += velocities[idx + 1] * dt;
      positions[idx + 2] += velocities[idx + 2] * dt;

      // 🔥 Seulement si isFire : couleur → noir en montant
      if (isFire) {
        // progression verticale 0 (en bas) → 1 (en haut)
        const rawT = (positions[idx + 1] - origin[1]) / height;
        const t = MathUtils.clamp(rawT, 0, 1);
        const tPow = t * t; // plus agressif qu'une simple interpolation linéaire
        const inv = 1 - tPow; // 1 en bas, 0 en haut

        const baseR = 1.0;
        const baseG = 0.6;
        const baseB = 0.2;

        colors[idx] = baseR * inv;
        colors[idx + 1] = baseG * inv;
        colors[idx + 2] = baseB * inv;
      }
    }

    geom.attributes.position.needsUpdate = true;
    geom.attributes.color.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        transparent
        alphaTest={0.02}
        opacity={0.75}
        depthWrite={false}
        blending={isFire ? NormalBlending : AdditiveBlending}
        size={size}
        sizeAttenuation
        vertexColors
        toneMapped={false}
      />
    </points>
  );
}
