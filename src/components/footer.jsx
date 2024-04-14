import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p>Logo</p>
        <div className="footer_links">
          <ul>
            <li className="footer_head">Mobile app</li>
            <li>Features</li>
            <li>Live Share</li>
            <li>Video record</li>
          </ul>
          <ul>
            <li className="footer_head">Mobile app</li>
            <li>Features</li>
            <li>Live Share</li>
            <li>Video record</li>
          </ul>
          <ul>
            <li className="footer_head">Mobile app</li>
            <li>Features</li>
            <li>Live Share</li>
            <li>Video record</li>
          </ul>
        </div>
      </div>
      <hr style={{ margin: "2em 0" }} />
      <div className="footerBottom_container">
        <p>&copy; PhotoHub, 2024. We love our users!</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Follow US: </p>
          <div>
            <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
            <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
            <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
            <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
