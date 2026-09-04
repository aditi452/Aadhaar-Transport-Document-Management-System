import { useState } from "react";
import "../styles/uploadDocument.css";
import { createDocument } from "../services/documentService";

const DOCUMENT_TYPES = [
  "Aadhaar",
  "Driving License",
  "Vehicle RC",
  "Passport",
  "PAN",
  "Other",
];

const initialState = {
  documentName: "",
  documentType: "Other",
  documentNumber: "",
  issueDate: "",
  expiryDate: "",
  file: null,
};

function UploadDocument({ onUploaded }) {
  const [formData, setFormData] = useState(initialState);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
    setFileName(file ? file.name : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.documentName) {
      setError("Document name is required.");
      return;
    }

    setUploading(true);

    try {
      await createDocument(formData);
      setFormData(initialState);
      setFileName("");
      onUploaded?.();
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to upload document."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="upload-section">

      <h2>Upload New Document</h2>

      {error && <p className="form-error">{error}</p>}

      <form className="upload-box" onSubmit={handleSubmit}>

        <input
          type="text"
          name="documentName"
          placeholder="Document name (e.g. Aadhaar Card)"
          value={formData.documentName}
          onChange={handleChange}
          required
        />

        <select
          name="documentType"
          value={formData.documentType}
          onChange={handleChange}
        >
          {DOCUMENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="documentNumber"
          placeholder="Document number (optional)"
          value={formData.documentNumber}
          onChange={handleChange}
        />

        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
        />

        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
        />

        <input
          type="file"
          id="documentUpload"
          onChange={handleFileChange}
        />

        <label htmlFor="documentUpload">
          📄 {fileName || "Choose Document"}
        </label>

        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>

      </form>

    </section>
  );
}

export default UploadDocument;
