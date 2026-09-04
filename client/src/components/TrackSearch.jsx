import { useState } from "react";
import "../styles/trackSearch.css";

export default function TrackSearch() {
  const [applicationId, setApplicationId] = useState("");

  const handleTrack = () => {
    if (applicationId.trim() === "") {
      alert("Please enter your Application ID.");
      return;
    }

    alert(`Tracking Application ID: ${applicationId}`);
  };

  return (
    <div className="track-search">
      <h2>Track Your Application</h2>
      <p>Enter your Application ID to check the current status.</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Application ID"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
        />

        <button onClick={handleTrack}>
          Track Status
        </button>
      </div>
    </div>
  );
}