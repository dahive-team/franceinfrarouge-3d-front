import { AnimatePresence, m } from "framer-motion";
import { views } from "./content.js";
import { animateFromBottom } from "../lib/animations.js";

export default function Steps({ view, handleSelectView }) {
  const isInitialView = view === "view0";
  const buttonIsActive = (id) => id === view;

  return (
    <AnimatePresence>
      {!isInitialView && (
        <div className="factory3d-buttons-wrapper">
          <m.ul
            variants={animateFromBottom({})}
            initial="initial"
            animate="animate"
            exit="exit"
            className="factory3d-buttons factory3d-has-glass-effect"
          >
            {views
              ?.filter(({ id }) => id !== "view0")
              ?.map(({ id, title }) => {
                const isActive = buttonIsActive(id);

                return (
                  <li
                    key={`step-${id}`}
                    className={`factory3d-button factory3d-has-hover-effect ${
                      isActive ? "isActive" : ""
                    }`}
                  >
                    {isActive && (
                      <m.div
                        layoutId="background"
                        id="background"
                        className="factory3d-button-background"
                        transition={{
                          duration: 0.5,
                          type: "spring",
                          stiffness: 150,
                          damping: 24,
                        }}
                      />
                    )}
                    <button onClick={() => handleSelectView(id)}>
                      {title}
                    </button>
                  </li>
                );
              })}
          </m.ul>
        </div>
      )}
    </AnimatePresence>
  );
}
