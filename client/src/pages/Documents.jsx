import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import DocumentsBanner from "../components/DocumentsBanner";
import DocumentFilter from "../components/DocumentFilter";
import DocumentStats from "../components/DocumentStats";
import MyDocuments from "../components/MyDocuments";
import UploadDocument from "../components/UploadDocument";
import Footer from "../components/Footer";
import { getDocuments, deleteDocument } from "../services/documentService";

import "../styles/documents.css";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const fetchDocuments = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to load documents."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this document?")) return;

    try {
      await deleteDocument(id);
      setDocuments((prev) => prev.filter((doc) => doc._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete document.");
    }
  };

  const visibleDocuments = documents.filter((doc) => {
    const matchesFilter = filter === "All" || doc.status === filter;
    const matchesSearch = doc.documentName
      ?.toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <DocumentsBanner />

      <DocumentFilter activeFilter={filter} onFilterChange={setFilter} />

      <DocumentStats documents={documents} />

      <MyDocuments
        documents={visibleDocuments}
        loading={loading}
        error={error}
        onSearch={setSearch}
        onDelete={handleDelete}
      />

      <UploadDocument onUploaded={fetchDocuments} />

      <Footer />
    </>
  );
}

export default Documents;
