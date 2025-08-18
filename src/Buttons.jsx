import { Html } from "@react-three/drei";
import { views, getView } from "./content";

export default function Buttons({
  onClickEvent,
  moveCameraTo,
  currentObject,
  ...props
}) {
  const handleClick = (id) => {
    const view = getView(id);
    if (!view) return;
    const { cameraPosition, target } = view;
    moveCameraTo({ cameraPosition, target });
    onClickEvent(id);
  };

  const buttonIsActive = (id) => currentObject?.id === id;

  // on exclut "view0" et on garde l'index pour le delay
  const items = views.filter((v) => v.id !== "view0");

  return (
    <group {...props} dispose={null}>
      {items.map(({ id, position }, i) => (
        <mesh key={`button-${id}`}>
          <Html wrapperClass="label" distanceFactor={50} position={position}>
            <button
              className={`focus-button ${buttonIsActive(id) ? "active" : ""}`}
              onClick={() => handleClick(id)}
            />
          </Html>
        </mesh>
      ))}
    </group>
  );
}
