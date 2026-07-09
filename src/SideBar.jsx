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
  const hideSidebar = view === "view0" || view === "view1" || view === "view10";
  const isView0 = view === "view0";
  const isView1 = view === "view1";

  const handleCloseSidebar = () => {
    handleSelectView("view1");
  };

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={isView1}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ type: "spring", stiffness: 150, damping: 24 }}
        className={`factory3d-sidebar-wrapper factory3d-sidebar-wrapper-show`}
      >
        <div className="factory3d-prev-next-buttons">
          {prevView && !isView1 && (
            <button
              className="prev factory3d-has-glass-effect factory3d-has-hover-effect"
              onClick={() => handleSelectView(prevView?.id)}
            />
          )}
          {nextView && !isView0 && (
            <button
              className="next factory3d-has-glass-effect factory3d-has-hover-effect"
              onClick={() => handleSelectView(nextView?.id)}
            />
          )}
        </div>
        <AnimatePresence mode="wait">
          {!hideSidebar && (
            <m.aside
              key={viewContent?.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: "spring", stiffness: 150, damping: 24 }}
              ref={sidebarRef}
              className="factory3d-sidebar factory3d-has-glass-effect"
            >
              {viewContent?.image && (
                <img src={viewContent?.image} alt={viewContent?.title} />
              )}
              <div className="factory3d-sidebar-texts">
                <button className="closeSidebar" onClick={handleCloseSidebar} />
                <h2>{viewContent?.title}</h2>
                <p>{viewContent?.description}</p>
                <a
                  href={viewContent?.link}
                  className="factory3d-primary-button"
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
