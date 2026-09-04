import "../styles/documentItem.css";

const ICONS = {
  Aadhaar: "📄",
  "Driving License": "🪪",
  "Vehicle RC": "🚗",
  Passport: "🛂",
  PAN: "🪪",
  Other: "🗂️",
};

function formatDate(dateString) {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function DocumentItem({ document, onDelete }) {
  const {
    _id,
    documentName,
    documentType,
    documentNumber,
    status,
    expiryDate,
    fileUrl,
  } = document;

  const fileHref = fileUrl || null;

  return (
    <div className="document-item">

      <div className="document-left">

        <div className="document-icon">
          {ICONS[documentType] || "🗂️"}
        </div>

        <div>
          <h3>{documentName}</h3>
          <p>{documentNumber || "No document number"}</p>
          <span className={`status ${status.toLowerCase().replace(" ", "-")}`}>
            {status}
          </span>
        </div>

      </div>

      <div className="document-right">

        <p className="expiry">Expires: {formatDate(expiryDate)}</p>

        <div className="document-buttons">
          {fileHref && (
            <a
              className="view-btn"
              href={fileHref}
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          )}

          <button
            type="button"
            className="download-btn"
            onClick={() => onDelete?.(_id)}
          >
            Delete
          </button>
        </div>

      </div>

    </div>
  );
}

export default DocumentItem;
