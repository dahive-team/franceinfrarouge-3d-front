import { useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { MeshToonMaterial } from "three";

export default function Factory({ onClickEvent, moveCameraTo, ...props }) {
  const { scene, animations } = useGLTF("/factory.glb", true);
  const { actions, names } = useAnimations(animations, scene);

  // On chharge le meshToonMaterial une seule fois
  const masterToonMaterial = useMemo(() => new MeshToonMaterial(), []);

  useEffect(() => {
    // On exécute les animations
    names?.forEach((name) => actions[name]?.play());

    scene.traverse((child) => {
      if (child.isMesh) {
        // On clone le matériau de base
        const newMaterial = masterToonMaterial.clone();

        // On injecte les propriétés du matériau d'origine de Blender
        newMaterial.map = child.material.map;
        newMaterial.color.copy(child.material.color);

        child.material = newMaterial;

        // On applique les ombres
        if (child.userData.addCastShadow) child.castShadow = true;
        if (child.userData.addReceiveShadow) child.receiveShadow = true;
      }
    });
  }, [scene, actions, names, masterToonMaterial]);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/factory.glb");
