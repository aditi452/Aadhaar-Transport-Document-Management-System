import "../styles/contactForm.css";

function ContactForm() {
  return (
    <section className="contact-form-section">

      <h2>Send us a Message</h2>
      <p>
        Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form className="contact-form">

        <div className="form-row">
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />
        </div>

        <div className="form-row">
          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Subject"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Write your message here..."
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default ContactForm;