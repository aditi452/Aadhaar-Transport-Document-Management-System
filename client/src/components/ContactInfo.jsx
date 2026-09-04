import "../styles/contactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info">

      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-grid">

        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Address</h3>
          <p>Raipur, Chhattisgarh</p>
          <span>India - 492001</span>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
          <span>Mon - Sat</span>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>support@aadhaarseva.com</p>
          <span>24/7 Support</span>
        </div>

        <div className="contact-card">
          <div className="contact-icon">🕒</div>
          <h3>Working Hours</h3>
          <p>09:00 AM - 06:00 PM</p>
          <span>Sunday Closed</span>
        </div>

      </div>

    </section>
  );
}

export default ContactInfo;