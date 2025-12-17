export default function CanvasLoader() {
  return (
    <div className="factory3d-canvas-loader-container">
      <img
        fetchPriority="high"
        className="factory3d-canvas-loader"
        src="/loader-background.webp"
        width="1920"
        height="1080"
        alt="Factory background"
      />
    </div>
  );
}
