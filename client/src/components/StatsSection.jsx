import "../styles/StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-section">

      <div className="stats-card">

        <div className="stats-icon">👥</div>

        <h2>1M+</h2>

        <p>Registered Users</p>

      </div>

      <div className="stats-card">

        <div className="stats-icon">📄</div>

        <h2>5M+</h2>

        <p>Documents Managed</p>

      </div>

      <div className="stats-card">

        <div className="stats-icon">🏛️</div>

        <h2>50+</h2>

        <p>Government Services</p>

      </div>

      <div className="stats-card">

        <div className="stats-icon">⭐</div>

        <h2>99%</h2>

        <p>User Satisfaction</p>

      </div>

    </section>
  );
}

export default StatsSection;