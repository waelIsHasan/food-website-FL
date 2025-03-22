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
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque neque
          voluptate error quas distinctio,
        </p>
        <div className="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div className="card-footer">
          <h4>{price}</h4>
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
