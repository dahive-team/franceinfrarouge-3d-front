import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "lenis/react";

import { getView, getPrevNexView } from "./content";

import Experience from "./Experience";

export default function App() {
  const [view, setView] = useState(null);
  const handleSelectView = (v) => {
    setView(v);
  };

  const viewContent = getView(view) || null;

  const handleCloseSidebar = () => {
    setView("initial");
  };
  const { prevView, nextView } = getPrevNexView(viewContent?.view) || {};
  const buttonIsActive = (id) => viewContent?.view === id;

  return (
    <>
      <ReactLenis root />
      <section className="srollContainer">
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
          className={`sidebar ${viewContent?.triggerSidebar ? "show" : ""}`}
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
