import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrackBanner from "../components/TrackBanner";
import TrackSearch from "../components/TrackSearch";
import ApplicationCard from "../components/ApplicationCard";
import ProgressTracker from "../components/ProgressTracker";
import StatusTimeline from "../components/StatusTimeline";

import "../styles/trackApplication.css";

export default function TrackApplication() {
  return (
    <>
      <Navbar />

      <div className="track-page">
        <TrackBanner />

        <div className="track-container">
          <TrackSearch />
          <ApplicationCard />
          <ProgressTracker />
          <StatusTimeline />
        </div>
      </div>

      <Footer />
    </>
  );
}