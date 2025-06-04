import { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";

import { getView } from "./content";

export default function Factory({ onClickEvent, moveCameraTo, ...props }) {
  const { nodes, materials } = useGLTF("/factory.glb");
  const receptionRef = useRef(null);
  const grayBuildingRef = useRef(null);

  const handleClick = (v) => {
    const view = getView(v);
    const { position, target } = view;
    moveCameraTo({ position, target });
    onClickEvent(v);
  };

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group ref={receptionRef}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Factory}
          />
          <Html
            wrapperClass="label"
            distanceFactor={11}
            position={[0, -10, 5]}
            occlude={[receptionRef]}
          >
            <button onClick={() => handleClick("hall")}>Entrée 🏡</button>
          </Html>
        </group>
        <group ref={(grayBuildingRef, grayBuildingRef)}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Silo}
          />
          <Html
            wrapperClass="label"
            distanceFactor={11}
            position={[-20, -4, 3]}
            occlude={[receptionRef, grayBuildingRef]}
          >
            <button onClick={() => handleClick("offices")}>Bureaux 🏭</button>
          </Html>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/factory.glb");
