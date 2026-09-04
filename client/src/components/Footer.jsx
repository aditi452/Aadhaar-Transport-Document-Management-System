import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}
        <div className="footer-about">

          <h2>🛡️ DocuGuard</h2>

          <p>
            A secure e-Governance platform to store,
            manage and renew all your important
            government documents digitally.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>

          <Link to="/documents">Documents</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Services */}

        <div className="footer-services">

          <h3>Services</h3>

          <p>Aadhaar Card</p>

          <p>PAN Card</p>

          <p>Driving License</p>

          <p>Vehicle RC</p>

          <p>Passport</p>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 support@docuguard.in</p>

          <p>📞 +91 9876543210</p>

          <p>📍 Raipur, Chhattisgarh</p>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 DocuGuard | Built for Secure Digital Governance

      </div>

    </footer>
  );
}

export default Footer;