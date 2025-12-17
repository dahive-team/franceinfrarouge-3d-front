import { useState, useEffect, useRef } from "react";
import { AudioContext } from "three";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "lenis/react";
import { LazyMotion, m } from "framer-motion";

import { getView, getPrevNextView } from "./content.js";
import { animateFromBottom } from "../lib/animations.js";

import Experience from "./Experience.jsx";
import SideBar from "./SideBar.jsx";
import MuteButton from "./MuteButton.jsx";
import CanvasLoader from "./CanvasLoader.jsx";
import Steps from "./Steps.jsx";

const loadDomAnimations = () =>
  import("../lib/motion.js").then((res) => res.default);

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
  const { prevView, nextView } = getPrevNextView(view) || {};

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = (e) => {
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
        {!isInitialView && (
          <m.button
            variants={animateFromBottom({ delay: 1 })}
            initial="initial"
            animate="animate"
            exit="exit"
            className="factory3d-return-button factory3d-has-glass-effect factory3d-has-hover-effect"
            onClick={() => handleSelectView("view0")}
          />
        )}
        <Steps view={view} handleSelectView={handleSelectView} />
        <CanvasLoader />
        <Canvas
          dpr={[1, 1.25]}
          shadows
          className="factory3d-canvas"
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
        <MuteButton
          isInitialView={isInitialView}
          muted={muted}
          handleMute={handleMute}
        />
        <m.div
          className={`factory3d-hero-background-container ${
            isInitialView ? "" : "hidden"
          }`}
        >
          <div className="factory3d-hero-texts">
            <span>FRANCE INFRA ROUGE</span>
            <h1>
              Expert en services
              <br />
              et solutions thermographiques
            </h1>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
