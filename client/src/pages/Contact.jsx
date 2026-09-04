import Navbar from "../components/Navbar";
import ContactBanner from "../components/ContactBanner";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


import "../styles/contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">
        <ContactBanner />
        <ContactInfo />
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export default Contact;