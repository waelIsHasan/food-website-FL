import Button from "../../components/Button";
import Card from "../../components/Card";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img5 from "./5.png";

import chef1 from "./chef1.jpg";
import chef2 from "./chef2.jpg";
import chef3 from "./chef3.jpg";

import "./Menu.css";
export default function Menu() {
  return (
    <div className="menu">
      <h1>Our Popular Menu</h1>
      <div className="meal-buttons">
        <Button name="All Category" width="large" isActive={true} />
        <Button name="Dinner" width="large" />
        <Button name="Lunch" width="large" />
        <Button name="Dissert" width="large" />
        <Button name="Drink" width="large" />
      </div>
      <div class="cards">
        <Card img={img1} name={"Spaghetti"} price="120 $" />
        <Card img={img2} name={"Spaghetti"} price="120 $" />
        <Card img={img3} name={"Spaghetti"} price="120 $" />
        <Card img={img5} name={"Spaghetti"} price="120 $" />
        <Card img={img1} name={"Spaghetti"} price="120 $" />
        <Card img={img2} name={"Spaghetti"} price="120 $" />
      </div>
      <h1>Our Popular Chef</h1>
      <div className="chefs">
        <div className="cards cards-chef"> 
        <Card isChef={true} img={chef1} />
        <Card isChef={true} img={chef3} chefName={"MHD Dlear Daoud"}/>
        <Card isChef={true} img={chef2} />

        </div>
        <Button name="View All" width="large"></Button>
      </div>
    </div>
  );
}
