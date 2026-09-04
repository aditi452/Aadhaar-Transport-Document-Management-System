import "../styles/popularServices.css";

function PopularServices() {
  return (
    <section className="popular-services">

      <h2>⭐ Popular Services</h2>

      <div className="popular-grid">

        <div className="popular-card">
          <span>🆔</span>
          <h3>Aadhaar Update</h3>
          <p>Update your address, mobile number and other Aadhaar details.</p>
          <button>Access Service</button>
        </div>

        <div className="popular-card">
          <span>🚗</span>
          <h3>Driving License</h3>
          <p>Apply, renew or download your driving licence.</p>
          <button>Access Service</button>
        </div>

        <div className="popular-card">
          <span>🚙</span>
          <h3>Vehicle Services</h3>
          <p>Manage RC, insurance and vehicle-related services.</p>
          <button>Access Service</button>
        </div>

      </div>

    </section>
  );
}

export default PopularServices;