import "../styles/documentFilter.css";

const FILTERS = ["All", "Verified", "Active", "Pending", "Expired"];

function DocumentFilter({ activeFilter = "All", onFilterChange }) {
  return (
    <div className="document-filter">
      {FILTERS.map((label) => (
        <button
          key={label}
          type="button"
          className={activeFilter === label ? "active" : ""}
          onClick={() => onFilterChange?.(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default DocumentFilter;
