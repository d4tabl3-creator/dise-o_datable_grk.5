export function RadarInstrument() {
  return (
    <div className="lab-radar" aria-hidden="true">
      <div className="lab-ring" />
      <div className="lab-ring lab-ring-2" />
      <div className="lab-ring lab-ring-3" />
      <div className="lab-cross" />
      <div className="lab-sweep" />
      <div className="lab-needle" />
      <span className="lab-blip" style={{ left: "62%", top: "30%" }} />
      <span className="lab-blip" style={{ left: "28%", top: "58%", animationDelay: "1.1s" }} />
      <span className="lab-blip" style={{ left: "70%", top: "68%", animationDelay: "2s" }} />
      <span className="lab-core" />
    </div>
  );
}
