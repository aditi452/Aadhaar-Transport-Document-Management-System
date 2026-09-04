import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/register.css";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    aadhaar: "",
    dob: "",
    gender: "",
    state: "",
    city: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    alert("Registration Successful! (Frontend Demo)");
  };

  return (
    <>
      <Navbar />

      <div className="register-page">

        {/* Banner */}
        <section className="register-banner">
          <div className="register-banner-content">

            <div className="register-banner-text">
              <h1>Create Your Aadhaar Seva Account 🚀</h1>

              <p>
                Join the Aadhaar Seva Portal to securely manage your
                government documents, access digital services, receive
                renewal reminders, and track all your applications from
                one place.
              </p>
            </div>

            <div className="register-banner-icon">
              📝
            </div>

          </div>
        </section>

        {/* Registration Form */}
        <section className="register-form-section">

          <h2>Create Account</h2>

          <p className="register-subtitle">
            Fill in your details to create your account.
          </p>

          <form className="register-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="aadhaar"
                placeholder="Aadhaar Number"
                value={formData.aadhaar}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-row">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="pincode"
                placeholder="PIN Code"
                value={formData.pincode}
                onChange={handleChange}
                required
              />

              <div></div>
            </div>

            <div className="form-row">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <label className="terms">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              I agree to the Terms & Conditions and Privacy Policy.
            </label>

            <button type="submit">
              Create Account
            </button>

            <p className="login-link">
              Already have an account? <a href="/login">Login</a>
            </p>

          </form>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default Register;