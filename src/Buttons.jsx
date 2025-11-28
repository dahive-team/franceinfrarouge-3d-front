import { Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
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
      {items.map(({ id, position, title, shortTitle }, i) => (
        <motion.mesh
          key={`button-${id}`}
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            delay: 2.2 + i * 0.08,
          }}
        >
          <Html
            wrapperClass="label"
            position={position}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                delay: 2.5 + i * 0.08,
              }}
              className={`focus-button ${buttonIsActive(id) ? "active" : ""}`}
              onClick={() => handleClick(id)}
            />
            <span className="label-focus-button" >{shortTitle}</span>
          </Html>
        </motion.mesh>
      ))}
    </group>
  );
}
