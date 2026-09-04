import { Link } from "react-router-dom";
import "../styles/documentCard.css";

function DocumentCard({
  icon,
  title,
  status,
  expiry,
  color,
}) {
  return (
    <Link
      to={`/details/${title}`}
      className="document-link"
    >
      <div className="document-card">

        <div className="document-icon">
          {icon}
        </div>

        <h3>{title}</h3>

        <p className="status">
          Status :
          <span style={{ color }}>
            {status}
          </span>
        </p>

        <p className="expiry">
          {expiry}
        </p>

        <button>
          View Details
        </button>

      </div>
    </Link>
  );
}

export default DocumentCard;