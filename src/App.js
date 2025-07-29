import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "lenis/react";

import { getView, getPrevNextView } from "./content";

import Experience from "./Experience";

export default function App() {
  const scrollContainerRef = useRef(null);
  const scrollCooldown = useRef(false);
  const [view, setView] = useState(null);
  const handleSelectView = (v) => {
    setView(v);
  };

  const viewContent = getView(view) || null;

  const handleCloseSidebar = () => {
    setView("initial");
  };
  const { prevView, nextView } = getPrevNextView(viewContent?.view) || {};
  const buttonIsActive = (id) => viewContent?.view === id;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = (e) => {
      if (scrollCooldown.current) return;

      const delta = e.deltaY;

      if (delta > 50 && nextView) {
        setView(nextView.view);
        scrollCooldown.current = true;
      } else if (delta < -50 && prevView) {
        setView(prevView.view);
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
  }, [viewContent?.view, nextView, prevView]);

  return (
    <>
      <ReactLenis root />
      <section ref={scrollContainerRef} className="scrollContainer">
        <ul className="journey-buttons">
          <li className={buttonIsActive("initial") ? "isActive" : ""}>
            <button onClick={() => handleSelectView("initial")}>
              Vue d'ensemble
            </button>
          </li>
          <li className={buttonIsActive("factory") ? "isActive" : ""}>
            <button onClick={() => handleSelectView("factory")}>Usine</button>
          </li>
          <li className={buttonIsActive("parking") ? "isActive" : ""}>
            <button onClick={() => handleSelectView("parking")}>Parking</button>
          </li>
        </ul>
        <Canvas
          shadows
          className="canvas"
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-20, 40, 70],
          }}
        >
          <Experience
            objectToView={viewContent}
            handleSelectView={handleSelectView}
            sidebarIsHidden={viewContent === null}
          />
        </Canvas>
        <aside
          data-lenis-prevent
          className={`journey-sidebar ${
            viewContent?.triggerSidebar ? "show" : ""
          }`}
        >
          <button className="closeSidebar" onClick={handleCloseSidebar} />
          <h1>{viewContent?.title}</h1>
          <p>{viewContent?.description}</p>
          {viewContent?.image && (
            <img src={viewContent?.image} alt={viewContent?.title} />
          )}
          <div className="prevNextButtons">
            {prevView && (
              <button
                className="prev"
                onClick={() => handleSelectView(prevView?.view)}
              >
                Précédent
              </button>
            )}
            {nextView && (
              <button
                className="next"
                onClick={() => handleSelectView(nextView?.view)}
              >
                Suivant
              </button>
            )}
          </div>
        </aside>
      </section>
    </>
  );
}
