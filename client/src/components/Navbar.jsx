import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">

      <div className="logo">
        🛡️ <span>DocuGuard</span>
      </div>

      <nav>
        <ul className="nav-links">

          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/services">
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/documents">
              Documents
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
              <NavLink to="/track-application">
              Track Application
              </NavLink>
          </li>

        </ul>
      </nav>

      <div className="nav-buttons">
        {isAuthenticated ? (
          <>
            <span className="nav-user-greeting">Hi, {user?.name?.split(" ")[0] || "there"}</span>
            <button type="button" className="login-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </>
        )}
      </div>

    </header>
  );
}

export default Navbar;
