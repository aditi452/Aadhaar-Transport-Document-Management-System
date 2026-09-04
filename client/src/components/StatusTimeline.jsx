import "../styles/statusTimeline.css";

export default function StatusTimeline() {
  return (
    <div className="timeline-card">
      <h2>Application Timeline</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h4>07 Aug 2026</h4>
            <p>Documents verified successfully.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h4>05 Aug 2026</h4>
            <p>Application submitted successfully.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h4>03 Aug 2026</h4>
            <p>Application received and queued for processing.</p>
          </div>
        </div>

      </div>
    </div>
  );
}