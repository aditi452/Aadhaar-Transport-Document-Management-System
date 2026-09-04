import "../styles/renewalReminder.css";

function RenewalReminder() {
  return (
    <div className="renewal-card">

      <h2>⏰ Upcoming Renewals</h2>

      <div className="renew-item">
        <div>
          <h4>🚗 Vehicle RC</h4>
          <p>Expires in 15 Days</p>
        </div>

        <button>Renew</button>
      </div>

      <div className="renew-item">
        <div>
          <h4>🛡 Vehicle Insurance</h4>
          <p>Expires in 5 Days</p>
        </div>

        <button>Renew</button>
      </div>

      <div className="renew-item">
        <div>
          <h4>🪪 Driving License</h4>
          <p>Valid till 2032</p>
        </div>

        <button>View</button>
      </div>

    </div>
  );
}

export default RenewalReminder;