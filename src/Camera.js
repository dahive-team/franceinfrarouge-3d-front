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

  const basePos = useRef(new Vector3(-20, 10, 20)); // position finale sans sway
  const duration = 1.8;
  const startTime = useRef(0);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      // normalisation comme Three.js : x,y ∈ [−1,1]
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(() => {
    const elapsed = clock.getElapsedTime() - startTime.current;
    const t = Math.min(elapsed / duration, 1);
    const easing = easeInOutCubic(t);

    // sway à appliquer à chaque frame (même pendant la transition)
    const swayStrength = 2;
    const sway = new Vector3(
      0,
      mouse.current.y * swayStrength,
      mouse.current.x * swayStrength
    );

    let targetPos = new Vector3();

    if (isTransitioning.current) {
      // Interpolation vers la position de transition
      targetPos.lerpVectors(fromPos.current, toPos.current, easing);
      currentTarget.current.lerpVectors(
        fromTarget.current,
        toTarget.current,
        easing
      );

      if (t >= 1) {
        isTransitioning.current = false;
        basePos.current.copy(toPos.current);
        currentTarget.current.copy(toTarget.current);
      }
    } else {
      // Pas de transition : on part de la base position
      targetPos.copy(basePos.current);
    }

    // On applique le sway au point de destination, puis on lerp la position
    targetPos.add(sway);
    camera.position.lerp(targetPos, 0.1);

    camera.lookAt(currentTarget.current);
  });

  useImperativeHandle(ref, () => ({
    setLookAt(x, y, z, tx, ty, tz) {
      fromPos.current.copy(camera.position);
      toPos.current.set(x, y, z);

      fromTarget.current.copy(currentTarget.current);
      toTarget.current.set(tx, ty, tz);

      startTime.current = clock.getElapsedTime();
      isTransitioning.current = true;
    },
  }));

  return null;
});

export default Camera;
