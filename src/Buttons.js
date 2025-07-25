import { Html } from "@react-three/drei";

import { getView } from "./content";

export default function Buttons({ onClickEvent, moveCameraTo, ...props }) {
  const handleClick = (v) => {
    const view = getView(v);
    if (!view) return;

    const { position, target } = view;
    moveCameraTo({ position, target });
    onClickEvent(v);
  };

  return (
    <group {...props} dispose={null}>
      <Html wrapperClass="label" distanceFactor={50} position={[30, 5, -5]}>
        <button onClick={() => handleClick("factory")}>Usine</button>
      </Html>

      <Html wrapperClass="label" distanceFactor={30} position={[-10, 0, 15]}>
        <button onClick={() => handleClick("parking")}>Parking</button>
      </Html>
    </group>
  );
}
