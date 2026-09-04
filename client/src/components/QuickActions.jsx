import "../styles/quickActions.css";

function QuickActions() {
  return (
    <section className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="actions-grid">

        <div className="action-card">
          <div className="action-icon">📄</div>
          <h3>Upload Document</h3>
          <p>Add a new document.</p>
        </div>

        <div className="action-card">
          <div className="action-icon">🔄</div>
          <h3>Renew Document</h3>
          <p>Renew expiring documents.</p>
        </div>

        <div className="action-card">
          <div className="action-icon">📅</div>
          <h3>Book Appointment</h3>
          <p>Schedule an appointment.</p>
        </div>

        <div className="action-card">
          <div className="action-icon">⬇️</div>
          <h3>Download</h3>
          <p>Download your documents.</p>
        </div>

      </div>

    </section>
  );
}

export default QuickActions;