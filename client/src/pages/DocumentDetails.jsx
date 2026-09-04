import Navbar from "../components/Navbar";
import "../styles/documentDetails.css";
import { useParams } from "react-router-dom";

function DocumentDetails() {

  const { documentName } = useParams();

  return (
    <>
      <Navbar />

      <div className="details-container">

        <div className="details-card">

          <h1>{documentName} Details</h1>

          <div className="detail-row">
            <span>Vehicle Number</span>
            <strong>CG04AB1234</strong>
          </div>

          <div className="detail-row">
            <span>Owner</span>
            <strong>Rahul Sharma</strong>
          </div>

          <div className="detail-row">
            <span>Registration Date</span>
            <strong>15 June 2022</strong>
          </div>

          <div className="detail-row">
            <span>Expiry Date</span>
            <strong>15 June 2027</strong>
          </div>

          <div className="detail-row">
            <span>Status</span>
            <strong className="active">Active</strong>
          </div>

          <div className="detail-row">
            <span>Renewal Mode</span>
            <strong className="online">Online Available</strong>
          </div>

          <h2>Required Documents</h2>

          <ul>
            <li>✔ Aadhaar Card</li>
            <li>✔ Insurance Certificate</li>
            <li>✔ Pollution Certificate</li>
          </ul>

          <div className="buttons">

            <button className="download-btn">
              Download PDF
            </button>

            <button className="renew-btn">
              Renew Now
            </button>

            <button className="guide-btn">
              Renewal Guide
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default DocumentDetails;