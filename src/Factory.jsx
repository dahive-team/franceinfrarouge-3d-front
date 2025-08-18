import { useGLTF } from "@react-three/drei";

export default function Factory({ onClickEvent, moveCameraTo, ...props }) {
  const { scene } = useGLTF("/factory.glb", true);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/factory.glb");
