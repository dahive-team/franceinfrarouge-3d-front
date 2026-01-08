import { AdditiveBlending } from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";

const rand = (min, max) => min + Math.random() * (max - min);

export default function Smoke({
  count = 100,
  origin = [0, 0, 0],
  radius = 0.2,
  height = 1.5,
  size = 1.5,
  speed = 0.007,
  isFire = false,
}) {
  const pointsRef = useRef();
  const fireTex = useTexture("/particle-flame.png");
  const smokeTex = useTexture("/particle-smoke.png");
  const sprite = isFire ? fireTex : smokeTex;
  const { positions, velocities, ages, lifes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const ages = new Float32Array(count);
    const lifes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      spawn(i, positions, velocities, ages, lifes);
    }
    return { positions, velocities, ages, lifes };
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
        spawn(i, positions, velocities, ages, lifes);
        continue;
      }
      positions[idx] += velocities[idx] * dt;
      positions[idx + 1] += velocities[idx + 1] * dt;
      positions[idx + 2] += velocities[idx + 2] * dt;
    }
    geom.attributes.position.needsUpdate = true;
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
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        transparent
        alphaTest={0.02}
        opacity={0.75}
        depthWrite={false}
        blending={AdditiveBlending}
        size={size}
        sizeAttenuation
      />
    </points>
  );
}
