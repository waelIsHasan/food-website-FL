import Button from "../../components/Button";
import Card from "../../components/Card";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img5 from "./5.png";
import chef1 from "./chef1.jpg";
import chef2 from "./chef2.jpg";
import chef3 from "./chef3.jpg";
import cus1 from "./1.avif";

import "./Menu.css";
import Footer from "../../components/Footer/Footer";
export default function Menu({ fromHome = false }) {
  let className = 'menu';
  if(!fromHome){
    className += " menu-margin"
  }
  
  return (
    <div className={className}>
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
      {fromHome && <ChefMenu />}
      {fromHome &&<CustomerSay />}
      {fromHome && <Hungary />}
    </div>
  );
}

function ChefMenu() {
  return (
    <>
      <h1>Our Popular Chef</h1>
      <div className="chefs">
        <div className="cards cards-chef">
          <Card isChef={true} img={chef1} />
          <Card isChef={true} img={chef3} chefName={"MHD Dlear Daoud"} />
          <Card isChef={true} img={chef2} />
        </div>
        <Button name="View All" width="large"></Button>
      </div>
    </>
  );
}

function CustomerSay() {
  return (
    <>
      <h1>What Our Customer Say</h1>
      <div className="customer-say">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          consectetur eligendi, laboriosam earum praesentium velit voluptates
          distinctio assumenda consequuntur est obcaecati dignissimos, magnam,
          fugiat ratione expedita? A omnis temporibus voluptate!
        </p>
        <div className="customer-info">
          <img src={cus1} alt="" />
          <div className="name-job">
            <h3>Wael hasan</h3>
            <h5>Software Engineer</h5>
          </div>
        </div>
      </div>
    </>
  );
}

function Hungary() {
  return (
    <>
      <Card isContent={true}>
        <h1>Hungary? We are open now..</h1>
        <div>
          <Button name="Order" width="medium" />
          <Button name="Reservation" width="medium" />
        </div>
      </Card>
    </>
  );
}
