import { useGLTF } from "@react-three/drei";

export default function Factory({ onClickEvent, moveCameraTo, ...props }) {
  const { scene } = useGLTF("/factory.glb", true);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );

  // return (
  //   <group {...props} dispose={null}>
  //     <group rotation={[-Math.PI / 2, 0, 0]}>
  //       <group ref={receptionRef}>
  //         <mesh
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.Object_2.geometry}
  //           material={materials.Factory}
  //         />
  //         <Html
  //           wrapperClass="label"
  //           distanceFactor={8}
  //           position={[0, -10, 5]}
  //           occlude={[receptionRef]}
  //         >
  //           <button onClick={() => handleClick("hall")}>Entrée 🏡</button>
  //         </Html>
  //       </group>
  //       <group ref={(grayBuildingRef, grayBuildingRef)}>
  //         <mesh
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.Object_3.geometry}
  //           material={materials.Silo}
  //         />
  //         <Html
  //           wrapperClass="label"
  //           distanceFactor={8}
  //           position={[-20, -4, 3]}
  //           occlude={[receptionRef, grayBuildingRef]}
  //         >
  //           <button onClick={() => handleClick("offices")}>Bureaux 🏭</button>
  //         </Html>
  //       </group>
  //     </group>
  //   </group>
  // );
}

useGLTF.preload("/factory.glb");
