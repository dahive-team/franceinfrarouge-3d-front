"use client";

import { m, AnimatePresence } from "framer-motion";
import { getView } from "./content.js";

export default function SideBar({
  sidebarRef,
  handleSelectView,
  prevView,
  nextView,
  view,
}) {
  const viewContent = getView(view) || null;

  const handleCloseSidebar = () => {
    handleSelectView("view1");
  };

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={view === "view1"}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ type: "spring", stiffness: 150, damping: 24 }}
        className={`journey-sidebar-wrapper ${
          viewContent?.triggerSidebar ? "show" : ""
        }`}
      >
        <div className="journey-prev-next-buttons">
          {prevView && (
            <button
              className="prev"
              onClick={() => handleSelectView(prevView?.id)}
            />
          )}
          {nextView && (
            <button
              className="next"
              onClick={() => handleSelectView(nextView?.id)}
            />
          )}
        </div>
        <AnimatePresence mode="wait">
          {view !== "view1" && (
            <m.aside
              key={viewContent?.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: "spring", stiffness: 150, damping: 24 }}
              ref={sidebarRef}
              data-lenis-prevent
              className="journey-sidebar"
            >
              {viewContent?.image && (
                <img src={viewContent?.image} alt={viewContent?.title} />
              )}
              <div className="journey-sidebar-texts">
                <button className="closeSidebar" onClick={handleCloseSidebar} />
                <h1>{viewContent?.title}</h1>
                <p>{viewContent?.description}</p>
                <a
                  href={viewContent?.link}
                  className="journey-sidebar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Découvrez nos solutions dédiées
                </a>
              </div>
            </m.aside>
          )}
        </AnimatePresence>
      </m.div>
    </AnimatePresence>
  );
}
