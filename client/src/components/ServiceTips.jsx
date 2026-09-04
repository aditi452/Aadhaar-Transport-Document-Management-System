import "../styles/serviceTips.css";

function ServiceTips() {
  return (
    <section className="service-tips">
      <h2>💡 Helpful Tips</h2>

      <div className="tips-grid">
        <div className="tip-card">
          <span>📄</span>
          <h3>Keep Documents Updated</h3>
          <p>
            Regularly update your personal details to avoid delays in government services.
          </p>
        </div>

        <div className="tip-card">
          <span>🔒</span>
          <h3>Protect Your Information</h3>
          <p>
            Never share your OTP or passwords with anyone.
          </p>
        </div>

        <div className="tip-card">
          <span>⏰</span>
          <h3>Track Expiry Dates</h3>
          <p>
            Renew important documents before they expire.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceTips;