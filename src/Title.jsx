import { m } from "framer-motion";

export default function Title({ isInitialView }) {
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
      </div>
    </m.div>
  );
}
