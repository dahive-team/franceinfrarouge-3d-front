import { useState, useEffect, useRef, Suspense } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import {
  SoftShadows,
  Sky,
  CameraControls,
  useTexture,
  Html,
  PerspectiveCamera,
} from "@react-three/drei";
// import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { getView } from "./content";

import Camera from "./Camera";
import Factory from "./Factory";

export default function Experience({ objectToView, handleSelectView }) {
  const groupRef = useRef(null);
  const cameraRef = useRef(null);
  const controls = useRef(null);
  const initialPosition = new Vector3(3, 8, 20);
  const initialTarget = new Vector3(0, 0, 0);
  const [isLoaded, setIsLoaded] = useState(false);

  const moveCameraTo = (view) => {
    if (cameraRef.current) {
      const { position, target } = view;
      cameraRef.current?.setLookAt(
        position[0],
        position[1],
        position[2],
        target[0],
        target[1],
        target[2],
        true
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const initialView = getView("initial");
      moveCameraTo(initialView);
    }, 1000);
  }, []);

  useEffect(() => {
    objectToView && moveCameraTo(objectToView);
  }, [objectToView]);

  // useFrame((state, delta) => {
  //   const elapsedTime = state.clock.getElapsedTime();
  //   const camera = cameraRef.current;
  // });

  return (
    <>
      {/* {showPerf && <Perf position="top-left" />} */}

      <CameraControls
        ref={cameraRef}
        target={[0, 10, 0]}
        minDistance={10}
        maxDistance={60}
        maxPolarAngle={Math.PI / 2}
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
        position={[1, 5, 3]}
        intensity={2}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={1.5} />
      <group ref={groupRef}>
        <Suspense fallback={null}>
          {/* <Camera /> */}
          <Factory
            scale={0.4}
            position={[4, -1, 2]}
            onClickEvent={handleSelectView}
            // moveCameraTo={moveCameraTo}
          />
        </Suspense>
      </group>
    </>
  );
}

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
