import { useState, useEffect, useRef } from "react";
import { AudioContext } from "three";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "lenis/react";
import { LazyMotion, m, AnimatePresence } from "framer-motion";

import { views, getView, getPrevNextView } from "./content.js";

import Experience from "./Experience.jsx";
import SideBar from "./SideBar.jsx";
import MuteButton from "./MuteButton.jsx";
const loadDomAnimations = () =>
  import("../lib/motion.js").then((res) => res.default);

const ulVariants = {
  rest: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { delay: 2.3, type: "spring", stiffness: 150, damping: 24 },
  },
  hover: {
    transition: { staggerChildren: 0.08 },
  },
};

const iconVariants = {
  rest: { opacity: 1, y: 0 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 0.15, duration: 0.2 },
      y: { delay: 0.15, type: "spring", stiffness: 150, damping: 24 },
    },
  },
  hover: {
    opacity: 0,
    y: -10,
    transition: { type: "spring", stiffness: 150, damping: 24 },
  },
};

const liVariants = {
  rest: { opacity: 0, y: 12 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 24 },
  },
};

export default function App() {
  const scrollContainerRef = useRef(null);
  const scrollCooldown = useRef(false);
  const sidebarRef = useRef(null);
  const [view, setView] = useState("view0");
  const [muted, setMuted] = useState(true);
  const isInitialView = view === "view0";

  const handleSelectView = (v) => {
    setView(v);
  };

  const viewContent = getView(view) || null;
  const buttonIsActive = (id) => id === view;

  const { prevView, nextView } = getPrevNextView(view) || {};

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = (e) => {
      // Si on scroll dans la sidebar, on ne fait rien
      if (sidebarRef.current?.contains(e.target)) return;
      // Si scrollCooldown est actif, on ignore l'événement
      if (scrollCooldown.current) return;

      const delta = e.deltaY;

      if (delta > 50 && nextView) {
        setView(nextView.id);
        scrollCooldown.current = true;
      } else if (delta < -50 && prevView) {
        setView(prevView.id);
        scrollCooldown.current = true;
      }

      setTimeout(() => {
        scrollCooldown.current = false;
      }, 1500);
    };

    container.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [viewContent, nextView, prevView]);

  const handleMute = () => {
    setMuted((prev) => {
      const newMuted = !prev;

      const ctx = AudioContext.getContext();
      if (ctx && ctx.state === "suspended") {
        ctx.resume();
      }

      return newMuted;
    });
  };

  return (
    <LazyMotion features={loadDomAnimations} strict>
      <ReactLenis root />
      <section ref={scrollContainerRef} className="factory3d-hero">
        <m.ul
          className="journey-buttons"
          variants={ulVariants}
          initial="rest"
          animate="enter"
          whileHover="hover"
        >
          <m.img
            variants={iconVariants}
            src="/path.svg"
            className="journey-icon"
            alt="Path icon"
          />
          {views?.map(({ id, title }) => (
            <m.li
              key={id}
              className={buttonIsActive(id) ? "isActive" : ""}
              variants={liVariants}
            >
              <button onClick={() => handleSelectView(id)}>{title}</button>
            </m.li>
          ))}
        </m.ul>
        <AnimatePresence mode="wait">
          {view !== "view0" && (
            <>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Canvas
                  dpr={[1, 1.25]}
                  shadows
                  className="canvas"
                  camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [-20, 10, 20],
                  }}
                >
                  <Experience
                    objectToView={viewContent}
                    handleSelectView={handleSelectView}
                    sidebarIsHidden={viewContent === null}
                    muted={muted}
                  />
                </Canvas>
              </m.div>
              <SideBar
                sidebarRef={sidebarRef}
                handleSelectView={handleSelectView}
                prevView={prevView}
                nextView={nextView}
                view={view}
              />
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 24,
                  // delay: 2.7,
                  delay: 1.7,
                }}
              >
                <MuteButton muted={muted} handleMute={handleMute} />
              </m.div>
            </>
          )}
        </AnimatePresence>
        <m.div
          className={`factory3d-hero-background-container ${
            isInitialView ? "" : "hidden"
          }`}
        >
          <div className="factory3d-hero-background-wrapper">
            <img
              className="factory3d-hero-background"
              src="/background.jpg"
              alt="Factory background"
            />
          </div>
          <div className="factory3d-hero-texts">
            <span>FRANCE INFRA ROUGE</span>
            <h1>
              Expert en services
              <br />
              et solutions thermographiques
            </h1>
            <span
              className={`factory3d-hero-loader ${
                view === "view1" ? "loading" : ""
              }`}
            />
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
