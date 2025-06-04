import { useState, useEffect, useRef, Suspense } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  CameraControls,
  SoftShadows,
  Sky,
  useTexture,
} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import Factory from "./Factory";

export default function Experience({ handleSelectView, sidebarIsHidden }) {
  const [cameraSubject, setCameraSubject] = useState(null);
  const boxRef = useRef(null);
  const groupRef = useRef(null);
  const sphereRef = useRef(null);
  const cameraRef = useRef(null);
  const initialPosition = new THREE.Vector3(3, 8, 20);
  const initialTarget = new THREE.Vector3(0, 0, 0);
  const grass = useTexture("/paving.jpg");
  grass.wrapS = grass.wrapT = THREE.RepeatWrapping;
  grass.repeat.set(200, 200);

  const { rotationSpeed, planeColor, showPerf } = useControls({
    rotationSpeed: {
      value: 0,
      min: 0,
      max: 2,
      step: 0.2,
      label: "Rotation speed",
    },
    planeColor: {
      value: "#98ff93",
      label: "Ground color",
    },
    showPerf: {
      value: true,
      label: "Show performance stats",
    },
  });

  useFrame((state, delta) => {
    const { camera } = state;
    const angle = state.clock.getElapsedTime();
    groupRef.current.rotation.y += delta * rotationSpeed;

    if (cameraSubject === "box") {
      camera.position.lerp(
        {
          x: boxRef.current.position.x,
          y: boxRef.current.position.y + 1,
          z: 4,
        },
        0.025
      );
    }
  });

  const moveCameraTo = (view) => {
    if (cameraRef.current) {
      const { position, target } = view;
      cameraRef.current?.setLookAt(
        position[0],
        position[1],
        position[2],
        initialTarget.x,
        initialTarget.y,
        initialTarget.z,
        true
      );
    }
  };

  useEffect(() => {
    if (!sidebarIsHidden) return;
    const controls = cameraRef.current;

    if (!controls) return;

    controls.setLookAt(
      initialPosition.x,
      initialPosition.y,
      initialPosition.z,
      initialTarget.x,
      initialTarget.y,
      initialTarget.z,
      true
    );
  }, [sidebarIsHidden]);

  return (
    <>
      {showPerf && <Perf position="top-left" />}

      {/* <OrbitControls
        ref={cameraRef}
        makeDefault
        maxPolarAngle={Math.PI / 2}
        minDistance={10}
        maxDistance={30}
      /> */}
      <CameraControls
        ref={cameraRef}
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minDistance={10}
        maxDistance={30}
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}
      />
      <SoftShadows size={25} samples={10} focus={0} />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0.5}
        azimuth={0.25}
      />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />
      <group ref={groupRef}>
        <Suspense fallback={null}>
          <Factory
            scale={0.4}
            position={[4, -1, 2]}
            onClickEvent={handleSelectView}
            moveCameraTo={moveCameraTo}
          />
        </Suspense>
      </group>
      <mesh
        receiveShadow
        position={[0, -1, 0]}
        rotation-x={-Math.PI / 2}
        scale={500}
      >
        <planeGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={grass} />
      </mesh>
    </>
  );
}
