import { useThree, useFrame } from "@react-three/fiber";
import { useScroll, useTransform } from "motion/react";

export default function Camera({ onClickEvent, moveCameraTo, ...props }) {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();

  const xPos = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6, 0.8, 1],
    [4, 8, 2, 0, -3, -10]
  );
  const yPos = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6, 0.8, 1],
    [6, 0, 4, 4, 1, 5]
  );
  const zPos = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6, 0.8, 1],
    [20, 10, 7, 9, 9, 7]
  );

  const LookX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6, 0.8, 1],
    [0, 0, 0, 0, 0, 0]
  );
  const LookZ = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6, 0.8, 1],
    [0, 0, 0, 0, 0, 0]
  );
  const LookY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.6, 0.8, 1],
    [0, 0, 0, 0, 0, 0]
  );

  camera.position.set(2, 5, 20);
  camera.lookAt(0, 0, 0);

  useFrame((state, delta) => {
    console.log(scrollYProgress.get());
    camera.position.set(xPos.get(), yPos.get(), zPos.get());
    camera.lookAt(LookX.get(), LookY.get(), LookZ.get());

    //   // The offset is between 0 and 1, you can apply it to your models any way you like
    //   const offset = 1 - scroll.offset;

    //   state.camera.position.set(
    //     Math.cos(offset * 4) * -10,
    //     Math.atan(offset * Math.PI * 2) * 5,
    //     Math.cos(offset * Math.PI * 2) * 20
    //   );
    //   state.camera.lookAt(0, 0, 0);
  });

  return <></>;
}
