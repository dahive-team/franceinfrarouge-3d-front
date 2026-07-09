import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { views, getView } from "./content";

export default function Buttons({
  onClickEvent,
  moveCameraTo,
  currentObject,
  showButtons,
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

  // on exclut "view0", "view1" et "view10" et on garde l'index pour le delay
  const items = views.filter(
    (v) => v.id !== "view0" && v.id !== "view1" && v.id !== "view10",
  );

  return (
    <group {...props} dispose={null}>
      {items.map(({ id, position, shortTitle }, i) => (
        <mesh key={`button-${id}`}>
          <Html wrapperClass="focus-button-container" position={position}>
            <div
              className={`focus-button-wrapper ${
                showButtons ? "focus-button-wrapper-show" : ""
              } ${buttonIsActive(id) ? "active" : ""}`}
            >
              <button
                className="focus-button"
                onClick={() => handleClick(id)}
              />
              <span className="focus-button-label">{shortTitle}</span>
            </div>
          </Html>
        </mesh>
      ))}
    </group>
  );
}
