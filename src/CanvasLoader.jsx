export default function CanvasLoader() {
  return (
    <div className="factory3d-canvas-loader-container">
      <img
        fetchpriority="high"
        className="factory3d-canvas-loader"
        src={
          import.meta.env.MODE === "production"
            ? "https://franceinfrarouge-website.dev.dahive.fr/wp-content/uploads/2026/07/loader-background.webp"
            : "/loader-background.webp"
        }
        width="1920"
        height="1080"
        alt="Factory background"
      />
    </div>
  );
}
