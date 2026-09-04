import "../styles/servicesBanner.css";

function ServicesBanner() {
  return (
    <section className="services-banner">

      <div className="services-banner-content">

        <div className="services-banner-text">
          <h1>Government Services</h1>

          <p>
            Access essential government services, manage your documents,
            and stay updated with important renewals—all from one secure platform.
          </p>

          <div className="services-banner-buttons">
            <button className="primary-btn">
              Explore Services
            </button>

            <button className="secondary-btn">
              Contact Support
            </button>
          </div>
        </div>

        <div className="services-banner-icon">
          🏛️
        </div>

      </div>

    </section>
  );
}

export default ServicesBanner;