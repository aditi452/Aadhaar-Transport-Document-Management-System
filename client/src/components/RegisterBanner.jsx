import "../styles/registerBanner.css";

function RegisterBanner() {
  return (
    <section className="register-banner">
      <div className="register-banner-content">

        <div className="register-banner-text">
          <h1>Create Your Aadhaar Seva Account</h1>

          <p>
            Join the Aadhaar Seva Portal to securely manage your government
            documents, access digital services, receive renewal reminders,
            and track your applications anytime, anywhere.
          </p>

          <div className="register-features">
            <div className="feature-card">
              🔒 Secure Registration
            </div>

            <div className="feature-card">
              📄 Digital Documents
            </div>

            <div className="feature-card">
              ⏰ Renewal Alerts
            </div>
          </div>
        </div>

        <div className="register-banner-icon">
          📝
        </div>

      </div>
    </section>
  );
}

export default RegisterBanner;