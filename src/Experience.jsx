import { useEffect, useRef, useMemo } from "react";
import { Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Color } from "three";
import { useControls } from "leva";

import Factory from "./Factory";
import Buttons from "./Buttons";
import Camera from "./Camera";
import Smoke from "./Smoke";
import GasLeaks from "./GasLeaks";

export default function Experience({ objectToView, handleSelectView }) {
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

  const {
    directionalLightIntensity,
    directionalLightColor,
    ambientLightIntensity,
    ambientLight,
    showPerf,
  } = useControls({
    directionalLightIntensity: {
      value: 1,
      min: 0,
      max: 5,
      step: 0.1,
      label: "Directional intensity",
    },
    directionalLightColor: {
      r: 211,
      g: 199,
      b: 179,
      label: "Directional color",
    },
    ambientLightIntensity: {
      value: 1.4,
      min: 0,
      max: 5,
      step: 0.1,
      label: "Ambient intensity",
    },
    ambientLight: {
      r: 255,
      g: 255,
      b: 255,
      label: "Ambient color",
    },
    showPerf: {
      value: true,
      label: "Performance",
    },
  });

  const globalAmbientLight = useMemo(
    () =>
      new Color(
        ambientLight.r / 255,
        ambientLight.g / 255,
        ambientLight.b / 255,
      ),
    [ambientLight],
  );

  const globalDirectionalLight = useMemo(
    () =>
      new Color(
        directionalLightColor.r / 255,
        directionalLightColor.g / 255,
        directionalLightColor.b / 255,
      ),
    [directionalLightColor],
  );

  return (
    <>
      {showPerf && <Perf position="top-right" />}

      <Camera ref={cameraRef} />
      <Sky distance={450000} sunPosition={[10, 1, 10]} />
      <directionalLight
        castShadow
        // shadow-bias={0.4}
        shadow-bias={-0.05}
        position={[10, 20, 20]}
        shadow-camera-top={40}
        shadow-camera-bottom={-40}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-mapSize={300}
        intensity={directionalLightIntensity}
        color={globalDirectionalLight}
      />
      <ambientLight
        intensity={ambientLightIntensity}
        color={globalAmbientLight}
      />
      <group ref={groupRef}>
        <Factory scale={0.4} position-z={-2.6} />
        <Buttons
          onClickEvent={handleSelectView}
          moveCameraTo={moveCameraTo}
          currentObject={objectToView}
          showButtons={showButtons}
        />
        {/* Cheminées */}
        <Smoke origin={[15.8, 13, -4.7]} radius={0.7} height={15} />
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
