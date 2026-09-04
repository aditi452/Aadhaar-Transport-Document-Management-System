import "../styles/activitySection.css";

function ActivitySection() {
  return (
    <section className="activity-section">
      <h2>Recent Activity</h2>

      <div className="activity-list">

        <div className="activity-item">
          <span className="icon">📄</span>

          <div>
            <h4>Aadhaar Downloaded</h4>
            <p>Today • 10:45 AM</p>
          </div>

          <span className="status success">Completed</span>
        </div>

        <div className="activity-item">
          <span className="icon">🚗</span>

          <div>
            <h4>Vehicle RC Renewed</h4>
            <p>Yesterday • 5:30 PM</p>
          </div>

          <span className="status success">Completed</span>
        </div>

        <div className="activity-item">
          <span className="icon">🔔</span>

          <div>
            <h4>Insurance Renewal Reminder</h4>
            <p>2 Days Ago</p>
          </div>

          <span className="status pending">Pending</span>
        </div>

      </div>
    </section>
  );
}

export default ActivitySection;