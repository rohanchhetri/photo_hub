import { Link } from "react-router-dom";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav_items">
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="nav_links">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} id="home" />
            </Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/community">Community</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        <input type="text" id="search_bar" />
        <div className="register">
          <FontAwesomeIcon
            className="icon bars"
            icon={faBars}
            style={{ color: "var(--primary-color)", fontSize: "1.5rem" }}
          />
          <button className="btn" id="login_btn">
            Log in
          </button>
          <button className="btn" id="register_btn">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
