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

  return (
    <group {...props} dispose={null}>
      {views?.map(({ id, position }) => {
        // On n'affiche pas le bouton pour la vue initiale
        if (id === "view0") return null;

        return (
          <Html
            key={`button-${id}`}
            wrapperClass="label"
            distanceFactor={50}
            position={position}
          >
            <button
              className={`focus-button ${buttonIsActive(id) ? "active" : ""}`}
              onClick={() => handleClick(id)}
            />
          </Html>
        );
      })}
    </group>
  );
}
