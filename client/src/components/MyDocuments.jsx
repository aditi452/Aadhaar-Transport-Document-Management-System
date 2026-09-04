import "../styles/myDocuments.css";
import DocumentSearch from "./DocumentSearch";
import DocumentItem from "./DocumentItem";

function MyDocuments({ documents = [], loading, error, onSearch, onDelete }) {
  return (
    <section className="documents-section">

      <div className="documents-header">
        <h2>My Documents</h2>
      </div>

      <DocumentSearch onSearch={onSearch} />

      {loading && <p className="documents-status">Loading documents...</p>}

      {!loading && error && (
        <p className="documents-status documents-error">{error}</p>
      )}

      {!loading && !error && documents.length === 0 && (
        <p className="documents-status">
          No documents yet. Upload your first document below.
        </p>
      )}

      {!loading && !error && documents.length > 0 && (
        <div className="documents-grid">
          {documents.map((doc) => (
            <DocumentItem key={doc._id} document={doc} onDelete={onDelete} />
          ))}
        </div>
      )}

    </section>
  );
}

export default MyDocuments;
