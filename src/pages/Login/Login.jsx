import Button from "../../components/Button";
import "./Login.css";
import bgLogin from "./bg-login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <img src={bgLogin} alt="" />
      <div className="form-login glass-card ">
        <h1>Welcome , Login in Your Restaurant</h1>
        <lable>Email : </lable>
        <input type="text" />
        <hr />
        <lable>Password</lable>
        <input type="text" />
        <div className="button-login">
          <Button name="Login" width={"large"} />
        </div>
        <div className="break"></div>
        <div className="icons">
          <Link to="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookF} size="1x" />
          </Link>
          <a href="https://www.x.com">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="https://www.whatsapp.com">
            <FontAwesomeIcon icon={faWhatsapp} size="1x" />
          </a>
        </div>
      </div>
    </div>
  );
}
