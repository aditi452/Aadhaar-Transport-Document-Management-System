import ServiceCard from "./ServiceCard";
import "../styles/serviceGrid.css";

function ServiceGrid() {
  return (
    <section className="service-grid">

      <ServiceCard
        icon="🆔"
        title="Aadhaar Services"
        description="Update, download and manage Aadhaar."
      />

      <ServiceCard
        icon="💳"
        title="PAN Card"
        description="Apply, update and verify PAN details."
      />

      <ServiceCard
        icon="🛂"
        title="Passport"
        description="Passport application and tracking."
      />

      <ServiceCard
        icon="🚗"
        title="Driving License"
        description="Renew and manage driving licence."
      />

      <ServiceCard
        icon="🚙"
        title="Vehicle Services"
        description="RC, Insurance and Fitness."
      />

      <ServiceCard
        icon="🗳️"
        title="Voter ID"
        description="Apply and update voter information."
      />

    </section>
  );
}

export default ServiceGrid;