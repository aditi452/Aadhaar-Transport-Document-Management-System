import "../styles/progressTracker.css";

export default function ProgressTracker() {
  return (
    <div className="progress-card">
      <h2>Application Progress</h2>

      <div className="progress-container">

        <div className="progress-step completed">
          <div className="circle">✓</div>
          <p>Submitted</p>
        </div>

        <div className="line completed"></div>

        <div className="progress-step completed">
          <div className="circle">✓</div>
          <p>Documents</p>
        </div>

        <div className="line completed"></div>

        <div className="progress-step completed">
          <div className="circle">✓</div>
          <p>Verification</p>
        </div>

        <div className="line"></div>

        <div className="progress-step active">
          <div className="circle">4</div>
          <p>Approval</p>
        </div>

        <div className="line"></div>

        <div className="progress-step">
          <div className="circle">5</div>
          <p>Completed</p>
        </div>

      </div>
    </div>
  );
}