import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Left Section */}
      <div className="hero-content">

        <span className="hero-badge">
          🇮🇳 Government e-Governance Portal
        </span>

        <h1>
          Manage All Your
          <br />
          Government Documents
          <br />
          In One Secure Place
        </h1>

        <p>
          Store, manage, renew and access Aadhaar, PAN Card,
          Driving License, Vehicle RC, Insurance and other
          important government documents anytime, anywhere.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Explore Services
          </button>

        </div>

      </div>

      {/* Right Section */}

      <div className="hero-image">

        <div className="hero-card">

          <h3>🪪 Aadhaar Card</h3>

          <p className="active">
            ✔ Verified
          </p>

        </div>

        <div className="hero-card">

          <h3>🚗 Vehicle RC</h3>

          <p className="warning">
            Renewal in 15 Days
          </p>

        </div>

        <div className="hero-card">

          <h3>🛡️ Vehicle Insurance</h3>

          <p className="expired">
            Expired
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;