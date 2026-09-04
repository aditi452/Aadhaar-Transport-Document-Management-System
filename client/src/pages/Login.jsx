import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import "../styles/login.css";

function Login() {
  return (
    <>
      <Navbar />

      <div className="login-page">

        <section className="login-banner">
          <div className="login-banner-content">
            <div className="login-banner-text">
              <h1>Welcome Back 👋</h1>
              <p>
                Sign in to access your Aadhaar Seva Portal dashboard,
                manage your documents, and track government services.
              </p>
            </div>

            <div className="login-banner-icon">
              🔐
            </div>
          </div>
        </section>

        <section className="login-form-section">
          <h2>Login to Your Account</h2>
          <LoginForm />
        </section>

      </div>

      <Footer />
    </>
  );
}

export default Login;
