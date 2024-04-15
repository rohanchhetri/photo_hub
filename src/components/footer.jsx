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
        <div
          className="social"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1em",
            justifyContent: "center",
          }}
        >
          <p>Follow US: </p>
          <div className="social_link">
            <li className="icon_list" id="facebook">
              <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
            </li>
            <li className="icon_list" id="instagram">
              <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
            </li>
            <li className="icon_list" id="youtube">
              <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
            </li>
            <li className="icon_list" id="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp" />
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
