import { useEffect, useRef, Suspense } from "react";
import { Sky } from "@react-three/drei";
// import { useControls } from "leva";
import { Perf } from "r3f-perf";

import Factory from "./Factory";
import Buttons from "./Buttons";
import Camera from "./Camera";
import Sounds from "./Sounds";
import Smoke from "./Smoke";
import GasLeaks from "./GasLeaks";

export default function Experience({ objectToView, handleSelectView, muted }) {
  const groupRef = useRef(null);
  const cameraRef = useRef(null);
  const showButtons = objectToView?.id !== "view0";

  const moveCameraTo = (view) => {
    if (cameraRef.current) {
      const { cameraPosition, target } = view;
      if (!cameraPosition || !target) return;

      cameraRef.current?.setLookAt(...cameraPosition, ...target, true);
    }
  };

  useEffect(() => {
    objectToView && moveCameraTo(objectToView);
  }, [objectToView]);

  return (
    <>
      <Perf position="bottom-left" />

      <Camera ref={cameraRef} />
      <Sky distance={450000} sunPosition={[10, 1, 10]} />
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
        shadow-mapSize={800}
        color={"rgba(255, 235, 200, 1)"}
      />
      <ambientLight intensity={1} />
      <group ref={groupRef}>
        <Factory scale={0.4} position-z={-2.6} />
        <Buttons
          onClickEvent={handleSelectView}
          moveCameraTo={moveCameraTo}
          currentObject={objectToView}
          showButtons={showButtons}
        />
        <Sounds muted={muted} />
        {/* Cheminées */}
        <Smoke origin={[15.7, 12, -4.7]} radius={0.6} height={10} />
        <Smoke origin={[21.5, 13, -4.7]} radius={0.7} height={15} />
        {/* Incendie */}
        <Smoke
          origin={[-4.5, -1, -22.5]}
          radius={0.6}
          height={5}
          size={1}
          count={200}
          isFire
        />
        <GasLeaks />
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
