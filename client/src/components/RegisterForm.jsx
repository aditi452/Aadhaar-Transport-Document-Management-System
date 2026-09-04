import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/registerForm.css";

function RegisterForm() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    aadhaarNumber: "",
    dob: "",
    gender: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      // Backend doesn't need confirmPassword
      const { confirmPassword, ...payload } = formData;
      await register(payload);
      navigate("/documents");
    } catch (err) {
      const message =
        err.response?.data?.message || "Registration failed. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-form-section">

      <div className="register-card">

        <h2>Create Account</h2>

        <p>
          Fill in your details below to create your Aadhaar Seva account.
        </p>

        {error && <p className="form-error">{error}</p>}

        <form onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Aadhaar Number</label>
              <input
                type="text"
                name="aadhaarNumber"
                placeholder="XXXX XXXX XXXX"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
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

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="checkbox-group">
            <input type="checkbox" required />
            <span>I agree to the Terms & Conditions.</span>
          </div>

          <button className="register-btn" type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>

        </form>

      </div>

    </section>
  );
}

export default RegisterForm;
