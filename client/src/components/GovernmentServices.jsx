import ServiceCard from "./ServiceCard";
import "../styles/GovernmentServices.css";

function GovernmentServices() {
  return (
    <section className="services-section">

      <div className="section-title">

        <h2>Government Services</h2>

        <p>
          Access all essential government services from one place.
        </p>

      </div>

      <div className="services-grid">

        <ServiceCard
          icon="🪪"
          title="Aadhaar Card"
          description="Update, download and manage Aadhaar details."
        />

        <ServiceCard
          icon="💳"
          title="PAN Card"
          description="Apply, verify and update PAN information."
        />

        <ServiceCard
          icon="🚗"
          title="Driving License"
          description="Renew or verify your driving license."
        />

        <ServiceCard
          icon="📄"
          title="Vehicle RC"
          description="View and renew your registration certificate."
        />

        <ServiceCard
          icon="🛡️"
          title="Vehicle Insurance"
          description="Check insurance validity and renew online."
        />

        <ServiceCard
          icon="🛂"
          title="Passport"
          description="Track passport application and appointments."
        />

      </div>

    </section>
  );
}

export default GovernmentServices;