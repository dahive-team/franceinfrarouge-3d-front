import { useThree, useFrame } from "@react-three/fiber";
import { useImperativeHandle, useEffect, useRef, forwardRef } from "react";
import { Vector2, Vector3 } from "three";

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const Camera = forwardRef((props, ref) => {
  const { camera, clock } = useThree();

  const mouse = useRef(new Vector2());
  const fromPos = useRef(new Vector3());
  const toPos = useRef(new Vector3());
  const fromTarget = useRef(new Vector3());
  const toTarget = useRef(new Vector3());
  const currentTarget = useRef(new Vector3());

  const basePos = useRef(new Vector3(-20, 10, 20)); // position sans sway
  const duration = 1.8;
  const startTime = useRef(0);
  const isTransitioning = useRef(false);

  // Repère de sway "figé" entre transitions
  const swayRight = useRef(new Vector3(1, 0, 0));
  const swayUp = useRef(new Vector3(0, 1, 0));

  // utilitaires réutilisés
  const tmp = useRef(new Vector3());
  const targetPos = useRef(new Vector3());

  // 0) input souris global (ne se coupe pas au survol d'HTML)
  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const reset = () => mouse.current.set(0, 0);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
    };
  }, []);

  // Recalcule le repère swayRight/swayUp depuis position/target actuelles
  const recomputeSwayBasis = () => {
    // forward = (target - position)
    const forward = new Vector3()
      .subVectors(currentTarget.current, camera.position)
      .normalize();
    // right = forward × worldUp
    swayRight.current.copy(forward).cross(new Vector3(0, 1, 0)).normalize();
    // up = right × forward (orthonormal)
    swayUp.current.copy(swayRight.current).cross(forward).normalize();

    // Si la vue est quasiment verticale, fallback world axes
    if (
      !isFinite(swayRight.current.lengthSq()) ||
      swayRight.current.lengthSq() < 1e-6
    ) {
      swayRight.current.set(1, 0, 0);
      swayUp.current.set(0, 1, 0);
    }
  };

  useFrame(() => {
    const elapsed = clock.getElapsedTime() - startTime.current;
    const t = Math.min(elapsed / duration, 1);
    const easing = easeInOutCubic(t);

    // 1) interpolate base (sans sway)
    if (isTransitioning.current) {
      targetPos.current.lerpVectors(fromPos.current, toPos.current, easing);
      currentTarget.current.lerpVectors(
        fromTarget.current,
        toTarget.current,
        easing
      );
      if (t >= 1) {
        isTransitioning.current = false;
        basePos.current.copy(toPos.current);
        currentTarget.current.copy(toTarget.current);
        recomputeSwayBasis(); // <- fige le repère pour la nouvelle vue
      }
    } else {
      targetPos.current.copy(basePos.current);
    }

    // 2) sway dans le repère figé (sans recalcul par frame)
    const swayStrengthX = 2;
    const swayStrengthY = 2;
    const transitionAttenuation = isTransitioning.current ? 0.25 : 1; // moins de sway pendant la transition
    tmp.current
      .copy(swayRight.current)
      .multiplyScalar(mouse.current.x * swayStrengthX * transitionAttenuation)
      .addScaledVector(
        swayUp.current,
        mouse.current.y * swayStrengthY * transitionAttenuation
      );

    // 3) appliquer sway à la position (target reste stable = pas d'à-coups)
    const final = targetPos.current.clone().add(tmp.current);
    camera.position.lerp(final, 0.1);
    camera.lookAt(currentTarget.current);
  });

  useImperativeHandle(ref, () => ({
    setLookAt(x, y, z, tx, ty, tz) {
      fromPos.current.copy(camera.position);
      toPos.current.set(x, y, z);

      // base cible = dernier lookAt sans sway
      fromTarget.current.copy(currentTarget.current);
      toTarget.current.set(tx, ty, tz);

      startTime.current = clock.getElapsedTime();
      isTransitioning.current = true;
    },
  }));

  // init du repère au premier rendu
  useEffect(() => {
    currentTarget.current.copy(new Vector3(0, 0, 0)); // si tu as une target initiale, mets-la ici
    recomputeSwayBasis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
});

export default Camera;
