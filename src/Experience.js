import { useEffect, useRef, Suspense } from "react";
import { SoftShadows, Sky, PositionalAudio } from "@react-three/drei";
// import { useControls } from "leva";
// import { Perf } from "r3f-perf";

import { getView } from "./content";

import Factory from "./Factory";
import Buttons from "./Buttons";
import Camera from "./Camera";
import Sound from "./Sound";

export default function Experience({ objectToView, handleSelectView }) {
  const groupRef = useRef(null);
  const cameraRef = useRef(null);

  const moveCameraTo = (view) => {
    if (cameraRef.current) {
      const { cameraPosition, target } = view;
      cameraRef.current?.setLookAt(...cameraPosition, ...target, true);
    }
  };

  // Position en view 0 une seconde après le chargement de la scène
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
      {/* {showPerf && <Perf position="top-left" />} */}

      {/* <CameraControls
        ref={cameraRef}
        target={[0, 10, 0]}
        minDistance={15}
        maxDistance={60}
        maxPolarAngle={Math.PI / 2}
      /> */}
      <Camera ref={cameraRef} />
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
            // onClickEvent={handleSelectView}
          />
          <Buttons
            onClickEvent={handleSelectView}
            moveCameraTo={moveCameraTo}
            currentObject={objectToView}
          />
          <Sound url="/sounds/birds.mp3" position={[-60, 20, 20]} />
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
