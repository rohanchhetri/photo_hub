import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav_items">
          <div className="logo">Logo</div>
          <div className="nav_links">
            <a href="roh">Features</a>
            <a href="roh">Pricing</a>
            <a href="roh">Community</a>
            <a href="roh">Support</a>
          </div>
        </div>
        <div className="register">
          <FontAwesomeIcon
            className="menu"
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
