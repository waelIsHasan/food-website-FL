import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../Navbar/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="sup-logo">
        <img className="logo" src={logo} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam rem numquam iure et quisquam.</p>
        <div className="icons">
          <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} size="1x" /></Link>
          <a href="https://www.x.com"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
          <a href="https://www.whatsapp.com"><FontAwesomeIcon icon={faWhatsapp} size="1x" /></a>
        </div>
      </div>
      <div className="page">
        <h1>Page</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h1>Information</h1>
        <ul>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Testimonial</a>
          </li>
          <li>
            <a href="">Event</a>
          </li>
        </ul>
      </div>
      <div className="get-touch">
        <h1>Get in Touch</h1>
        <ul>
          <li>
            <a href="">Syria Damascus jaraman roda street</a>
          </li>
          <li>
            <a href="">waelhasan12342@gmail.com</a>
          </li>
          <li>
            <a href="">+963 937 866 905</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
