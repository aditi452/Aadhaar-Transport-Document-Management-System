import "../styles/documentsBanner.css";

function DocumentsBanner() {
  return (
    <section className="documents-banner">
      <div className="documents-banner-content">
        <div>
          <h1>📂 My Documents</h1>
          <p>
            View, download and track the expiry of all your important
            government documents in one place.
          </p>
        </div>

        <div className="documents-banner-icon">
          📁
        </div>
      </div>
    </section>
  );
}

export default DocumentsBanner;