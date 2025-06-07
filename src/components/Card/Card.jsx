import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./Card.css";
export default function Card({
  name = "title",
  price = "100$",
  img,
  isChef = false,
  chefName,
  isContent = false,
  children,
  description
}) {
  const navigate = useNavigate();
  function handleOrderClick(){
    navigate('/order')
  }
  if (isContent)
    return (
      <>
        <div className="card card-child">{children}</div>
      </>
    );

  if (!isChef)
    return (
      <div className="card">
        <img src={img} alt="" />
        <h1 >{name}</h1>
        <p className="description-parg">
        {description}
        </p>
        <div className="stars description-parg">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div className="card-footer">
          <h4 className="description-parg">{price}</h4>
          <Button onClick={handleOrderClick} name="Order" width="small" />
        </div>
      </div>
    );
  return (
    <div className="card-chef" name={chefName}>
      <img src={img} className="card-img" alt="" />
    </div>
  );
}
