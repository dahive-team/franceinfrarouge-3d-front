import { useEffect, useRef, Suspense } from "react";
import { Sky } from "@react-three/drei";
// import { useControls } from "leva";
// import { Perf } from "r3f-perf";

import { getView } from "./content";

import Factory from "./Factory";
import Buttons from "./Buttons";
import Camera from "./Camera";
import Sounds from "./Sounds";

export default function Experience({ objectToView, handleSelectView, muted }) {
  const groupRef = useRef(null);
  const cameraRef = useRef(null);

  const moveCameraTo = (view) => {
    if (cameraRef.current) {
      const { cameraPosition, target } = view;
      cameraRef.current?.setLookAt(...cameraPosition, ...target, true);
    }
  };

  // Position en view0 une seconde après le chargement de la scène
  useEffect(() => {
    setTimeout(() => {
      const initialView = getView("view0");
      handleSelectView("view0");
      moveCameraTo(initialView);
    }, 1000);
  }, []);

  useEffect(() => {
    objectToView && moveCameraTo(objectToView);
  }, [objectToView]);

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <Camera ref={cameraRef} />
      <Sky
        distance={450000}
        sunPosition={[10, 1, 10]}
      />
      <directionalLight
        castShadow
        // shadow-bias={0.4}
        shadow-bias={-0.05}
        position={[10, 20, 20]}
        intensity={3}
        shadow-camera-top={40}
        shadow-camera-bottom={-40}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        color={"rgba(255, 235, 200, 1)"}
      />
      <ambientLight intensity={1} />
      <group ref={groupRef}>
        <Suspense fallback={null}>
          <Factory scale={0.4} />
          <Buttons
            onClickEvent={handleSelectView}
            moveCameraTo={moveCameraTo}
            currentObject={objectToView}
          />
          <Sounds muted={muted} />
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
