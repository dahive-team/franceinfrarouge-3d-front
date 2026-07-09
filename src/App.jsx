import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { LazyMotion, m } from "framer-motion";

import { getView, getPrevNextView } from "./content.js";
import { animateFromBottom } from "../lib/animations.js";

import Experience from "./Experience.jsx";
import SideBar from "./SideBar.jsx";
import CanvasLoader from "./CanvasLoader.jsx";
import Steps from "./Steps.jsx";
import Title from "./Title.jsx";

const loadDomAnimations = () =>
  import("../lib/motion.js").then((res) => res.default);

export default function App() {
  const scrollContainerRef = useRef(null);
  const scrollCooldown = useRef(false);
  const sidebarRef = useRef(null);
  const [view, setView] = useState("view0");
  const [fullWidth, setFullWidth] = useState(false);
  const isInitialOrLastView = view === "view0" || view === "view10";

  const handleSelectView = (v) => {
    setView(v);
  };

  const viewContent = getView(view) || null;
  const { prevView, nextView } = getPrevNextView(view) || {};

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = (e) => {
      const delta = e.deltaY;

      // SCÉNARIO 1 : L'utilisateur scroll vers le bas
      if (delta > 20 && nextView) {
        // Bloquer le scroll de la page WordPress pour rester sur la 3D
        if (e.cancelable) e.preventDefault();

        if (!scrollCooldown.current) {
          setView(nextView.id);
          scrollCooldown.current = true;
          setTimeout(() => {
            scrollCooldown.current = false;
          }, 1200);
        }
      }
      // SCÉNARIO 2 : L'utilisateur scroll vers le haut
      else if (delta < -20 && prevView) {
        if (e.cancelable) e.preventDefault();

        if (!scrollCooldown.current) {
          setView(prevView.id);
          scrollCooldown.current = true;
          setTimeout(() => {
            scrollCooldown.current = false;
          }, 1200);
        }
      }
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [viewContent, nextView, prevView]);

  // Passe en full width en fonction de la view
  useEffect(() => {
    if (isInitialOrLastView) {
      setFullWidth(false);
      return;
    }

    setFullWidth(true);
  }, [view]);

  // Scroll vers la scène quand on passe en full width
  useEffect(() => {
    if (!fullWidth) return;

    const timer = setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [fullWidth]);

  return (
    <LazyMotion features={loadDomAnimations} strict>
      <section
        ref={scrollContainerRef}
        className={`factory3d-hero ${fullWidth ? "factory3d-hero-full-width" : ""}`}
      >
        {!isInitialOrLastView && (
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
          gl={{ powerPreference: "high-performance", antialias: true }}
          shadows={true}
          className="factory3d-canvas"
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-20, 10, 20],
          }}
        >
          <Suspense fallback={null}>
            <Experience
              objectToView={viewContent}
              handleSelectView={handleSelectView}
              sidebarIsHidden={viewContent === null}
            />
          </Suspense>
        </Canvas>
        <SideBar
          sidebarRef={sidebarRef}
          handleSelectView={handleSelectView}
          prevView={prevView}
          nextView={nextView}
          view={view}
        />
        {/* <Title
          isInitialView={isInitialView}
          handleSelectView={handleSelectView}
        /> */}
      </section>
    </LazyMotion>
  );
}
