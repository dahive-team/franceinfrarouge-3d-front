import { useRef, Suspense } from "react";
import * as THREE from "three";
import {
  SoftShadows,
  Sky,
  useTexture,
  Html,
  PerspectiveCamera,
} from "@react-three/drei";
// import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { getView } from "./content";

import Camera from "./Camera";
import Factory from "./Factory";

export default function Experience({ handleSelectView }) {
  const groupRef = useRef(null);
  const cameraRef = useRef(null);
  const initialTarget = new THREE.Vector3(0, 0, 0);
  const grass = useTexture("/paving.jpg");
  grass.wrapS = grass.wrapT = THREE.RepeatWrapping;
  grass.repeat.set(200, 200);

  // const { rotationSpeed, planeColor, showPerf } = useControls({
  //   rotationSpeed: {
  //     value: 0,
  //     min: 0,
  //     max: 2,
  //     step: 0.2,
  //     label: "Rotation speed",
  //   },
  //   planeColor: {
  //     value: "#98ff93",
  //     label: "Ground color",
  //   },
  //   showPerf: {
  //     value: true,
  //     label: "Show performance stats",
  //   },
  // });

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

  return (
    <>
      {/* {showPerf && <Perf position="top-left" />} */}
      <PerspectiveCamera makeDefault />
      <Perf position="top-left" />
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
          <Camera />
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
