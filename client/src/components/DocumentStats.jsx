import "../styles/documentStats.css";

function DocumentStats({ documents = [] }) {
  const stats = [
    {
      title: "Total Documents",
      count: documents.length,
      icon: "📄",
      color: "#2563eb",
    },
    {
      title: "Active",
      count: documents.filter((d) => d.status === "Active" || d.status === "Verified").length,
      icon: "✅",
      color: "#16a34a",
    },
    {
      title: "Pending",
      count: documents.filter((d) => d.status === "Pending").length,
      icon: "⚠️",
      color: "#f59e0b",
    },
    {
      title: "Expired",
      count: documents.filter((d) => d.status === "Expired").length,
      icon: "❌",
      color: "#dc2626",
    },
  ];

  return (
    <section className="document-stats">
      <div className="stats-heading">
        <h2>Document Overview</h2>
        <p>Quick summary of all your uploaded documents.</p>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stats-card" key={index}>
            <div
              className="stats-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h2>{item.count}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DocumentStats;
