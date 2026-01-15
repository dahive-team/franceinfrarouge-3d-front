import { m } from "framer-motion";

export default function Title({ isInitialView, handleSelectView }) {
  const handleEnterScene = () => {
    handleSelectView("view1");
  };

  return (
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
        <button
          className="factory3d-primary-button factory3d-enter-button"
          onClick={handleEnterScene}
        >
          Entrer
        </button>
      </div>
    </m.div>
  );
}
