import { useEffect } from "react";
import { useGLTF, useAnimations  } from "@react-three/drei";

export default function Factory({ onClickEvent, moveCameraTo, ...props }) {
  const { scene, animations  } = useGLTF("/factory.glb", true);
  // const { actions, names} = useAnimations(animations, scene);
  // actions[names[0]]?.play()

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/factory.glb");
