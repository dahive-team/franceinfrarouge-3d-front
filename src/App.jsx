import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "lenis/react";
import { LazyMotion, m } from "framer-motion";

import { views, getView, getPrevNextView } from "./content.js";

import Experience from "./Experience.jsx";
import SideBar from "./SideBar.jsx";
const loadDomAnimations = () =>
  import("../lib/motion.js").then((res) => res.default);

const ulVariants = {
  rest: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { delay: 3.2, type: "spring", stiffness: 150, damping: 24 },
  },
  hover: {
    transition: { staggerChildren: 0.08 },
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
  const [view, setView] = useState(null);
  const [muted, setMuted] = useState(true);

  const handleSelectView = (v) => {
    setView(v);
  };

  const viewContent = getView(view) || null;

  const { prevView, nextView } = getPrevNextView(viewContent?.id) || {};
  const buttonIsActive = (id) => viewContent?.id === id;

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
      }, 1000);
    };

    container.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [viewContent, nextView, prevView]);

  const handleMute = () => {
    setMuted((prev) => !prev);
  };

  return (
    <LazyMotion features={loadDomAnimations} strict>
      <ReactLenis root />
      <section ref={scrollContainerRef} className="scrollContainer">
        {/* <m.ul
          className="journey-buttons"
          variants={ulVariants}
          initial="rest"
          animate="enter"
          whileHover="hover"
        >
          {views?.map(({ id, title }) => (
            <m.li
              key={id}
              className={buttonIsActive(id) ? "isActive" : ""}
              variants={liVariants}
            >
              <button onClick={() => handleSelectView(id)}>{title}</button>
            </m.li>
          ))}
        </m.ul> */}
        <Canvas
          dpr={[1, 1.5]}
          shadows={false}
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
        <SideBar
          sidebarRef={sidebarRef}
          handleSelectView={handleSelectView}
          prevView={prevView}
          nextView={nextView}
          view={view}
        />
        <m.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 24,
            delay: 3.7,
          }}
          className="journey-mute-button"
          onClick={handleMute}
        >
          {muted ? "🔊 Activer le son" : "🔇 Désactiver le son"}
        </m.button>
      </section>
    </LazyMotion>
  );
}
