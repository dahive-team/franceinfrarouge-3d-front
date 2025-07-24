import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ReactLenis, useLenis } from "lenis/react";

import { getView } from "./content";

import Experience from "./Experience";

export default function App() {
  const [viewContent, setViewContent] = useState(null);
  const handleSelectView = (view) => {
    const content = getView(view);
    setViewContent(content);
  };

  const handleCloseSidebar = () => {
    setViewContent(null);
  };

  return (
    <>
      <ReactLenis root />
      <section className="srollContainer">
        <ul className="journey-buttons">
          <li>
            <button onClick={() => handleSelectView("initial")}>
              1 - Vue d'ensemble
            </button>
          </li>
          <li>
            <button onClick={() => handleSelectView("factory")}>
              2 - Usine
            </button>
          </li>
          <li>
            <button onClick={() => handleSelectView("parking")}>
              3 - Parking
            </button>
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
        </aside>
      </section>
    </>
  );
}
