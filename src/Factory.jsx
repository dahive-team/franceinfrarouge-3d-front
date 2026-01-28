import { useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { MeshToonMaterial } from "three";

export default function Factory({ onClickEvent, moveCameraTo, ...props }) {
  const { scene, animations } = useGLTF("/factory-perf.glb", true);
  const { actions, names } = useAnimations(animations, scene);

  // On chharge le meshToonMaterial une seule fois
  const masterToonMaterial = useMemo(() => new MeshToonMaterial(), []);

  useEffect(() => {
    if (actions && names) {
      names.forEach((name) => actions[name]?.play());
    }

    const materialCache = new Map();

    scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        // Gestion des ombres
        child.castShadow = true;
        child.receiveShadow = true;

        // Gestion du meshToonMaterial avec cache pour optimiser la mémoire
        const key = `${child.material.color.getHex()}_${child.material.map?.uuid || "no-map"}`;

        if (!materialCache.has(key)) {
          const newMaterial = masterToonMaterial.clone();
          newMaterial.map = child.material.map;
          newMaterial.color.copy(child.material.color);
          newMaterial.envMapIntensity = 0;
          newMaterial.precision = "lowp";
          newMaterial.needsUpdate = true;
          materialCache.set(key, newMaterial);
        }

        child.material = materialCache.get(key);

        // Gestion des ombres
        // if (child.userData.addCastShadow) {
        //   child.castShadow = true;
        // }
        // if (child.userData.addReceiveShadow) {
        //   child.receiveShadow = true;
        // }
      }
    });
  }, [scene, actions, names, masterToonMaterial]);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/factory-perf.glb");
