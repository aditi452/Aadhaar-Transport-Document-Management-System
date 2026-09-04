import "../styles/serviceCard.css";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="service-btn">
        Explore
      </button>

    </div>
  );
}

export default ServiceCard;