import "../styles/applicationCard.css";

export default function ApplicationCard() {
  return (
    <div className="application-card">
      <h2>Application Details</h2>

      <div className="details-grid">

        <div className="detail-item">
          <span>Application ID</span>
          <strong>UAID20260012345</strong>
        </div>

        <div className="detail-item">
          <span>Applicant Name</span>
          <strong>Rahul Sharma</strong>
        </div>

        <div className="detail-item">
          <span>Service</span>
          <strong>Aadhaar Address Update</strong>
        </div>

        <div className="detail-item">
          <span>Status</span>
          <strong className="status verification">
            Under Verification
          </strong>
        </div>

        <div className="detail-item">
          <span>Submitted On</span>
          <strong>02 Aug 2026</strong>
        </div>

        <div className="detail-item">
          <span>Expected Completion</span>
          <strong>10 Aug 2026</strong>
        </div>

      </div>
    </div>
  );
}