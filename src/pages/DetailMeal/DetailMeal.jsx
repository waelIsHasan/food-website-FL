import { useParams } from "react-router-dom";
import { mealsData } from "../Menu/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./DetailMeal.css";

export default function DetailMeal() {
  const mealId = useParams();
  console.log(mealsData);
  const meal = mealsData.find((m) => {
    return mealId.id == m.id;
  });
  console.log(meal);
  return (
    <div className="detail-meal">
      <img className="image-detail-meal" src={meal.img} alt="" />
      <div className="name-price">
        <h1>{meal.name}</h1>
        <h2>{meal.price}</h2>
      </div>
      <ul className="more-details">
          <li>
            <Link to="https://www.x.com">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </Link>
            <div>
              <h3>chef</h3>
              <h5>dlear</h5>
            </div>
          </li>
          <li>
            <Link to="https://www.x.com">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </Link>
            <div>
              <h3>chef</h3>
              <h5>dlear</h5>
            </div>
          </li>
          <li>
            <Link to="https://www.x.com">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </Link>
            <div>
              <h3>chef</h3>
              <h5>dlear</h5>
            </div>
          </li>
          <li>
            <Link to="https://www.x.com">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </Link>
            <div>
              <h3>chef</h3>
              <h5>dlear</h5>
            </div>
          </li>
          <li>
            <Link to="https://www.x.com">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </Link>
            <div>
              <h3>chef</h3>
              <h5>dlear</h5>
            </div>
          </li>
        </ul>
      <div className="pargs">
        <h3>
          <strong>The Gradients with magic art</strong>
        </h3>
        <p>
          {meal.description}
          {meal.description}
          {meal.description}
          {meal.description}
          {meal.description}
        </p>
      </div>
    </div>
  );
}
