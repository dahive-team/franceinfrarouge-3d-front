import { m, AnimatePresence } from "framer-motion";
import { animateFromBottom } from "../lib/animations";

const barAnim = {
  unmuted: (custom) => ({
    scaleY: [0.35, 1, 0.35],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: custom,
    },
  }),
  muted: (custom) => ({
    scaleY: 0.1,
    transition: { duration: 0.25, ease: "easeOut", delay: custom },
  }),
};

function Bar({ delay = 0 }) {
  return (
    <m.div className="journey-mute-bar" variants={barAnim} custom={delay} />
  );
}

export default function MuteButton({ isInitialView, muted, handleMute }) {
  return (
    <AnimatePresence>
      {!isInitialView && (
        <m.div
          variants={animateFromBottom({ delay: 1.4 })}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <m.button
            className="journey-mute-button factory3d-has-glass-effect factory3d-has-hover-effect"
            onClick={handleMute}
            initial={false}
            animate={muted ? "muted" : "unmuted"}
          >
            <m.div
              className={`journey-mute-bars ${
                muted ? "journey-mute-bars-muted" : ""
              }`}
            >
              <Bar delay={0.0} />
              <Bar delay={0.1} />
              <Bar delay={0.2} />
              <Bar delay={0.3} />
              <Bar delay={0.4} />
              <Bar delay={0.5} />
            </m.div>
            <span>{muted ? "Activer" : "Désactiver"} le son</span>
          </m.button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
