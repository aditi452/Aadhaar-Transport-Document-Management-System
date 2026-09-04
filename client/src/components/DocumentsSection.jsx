import DocumentCard from "./DocumentCard";
import "../styles/documentsSection.css";

function DocumentsSection() {
  return (
    <section className="documents-section">

      <div className="section-title">
        <h2>My Documents</h2>
        <p>
          View and manage all your important government documents.
        </p>
      </div>

      <div className="documents-grid">

        <DocumentCard
          icon="🪪"
          title="Aadhaar Card"
          status="Verified"
          expiry="No Expiry"
          color="#16A34A"
        />

        <DocumentCard
          icon="💳"
          title="PAN Card"
          status="Active"
          expiry="No Expiry"
          color="#2563EB"
        />

        <DocumentCard
          icon="🚗"
          title="Driving License"
          status="Active"
          expiry="15 Jun 2032"
          color="#16A34A"
        />

        <DocumentCard
          icon="📄"
          title="Vehicle RC"
          status="Expiring Soon"
          expiry="15 Days Left"
          color="#F59E0B"
        />

        <DocumentCard
          icon="🛡️"
          title="Vehicle Insurance"
          status="Expired"
          expiry="Renew Now"
          color="#DC2626"
        />

        <DocumentCard
          icon="🛂"
          title="Passport"
          status="Active"
          expiry="12 Jan 2030"
          color="#16A34A"
        />

      </div>

    </section>
  );
}

export default DocumentsSection;