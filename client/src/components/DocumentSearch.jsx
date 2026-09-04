import { useState } from "react";
import "../styles/documentSearch.css";

function DocumentSearch({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <section className="document-search">
      <input
        type="text"
        placeholder="🔍 Search documents..."
        value={term}
        onChange={handleChange}
      />

      <button type="button">Search</button>
    </section>
  );
}

export default DocumentSearch;
