import Navbar from "../components/Navbar";
import RegisterBanner from "../components/RegisterBanner";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

import "../styles/register.css";

function Register() {
  return (
    <>
      <Navbar />

      <div className="register-page">
        <RegisterBanner />
        <RegisterForm />
      </div>

      <Footer />
    </>
  );
}

export default Register;