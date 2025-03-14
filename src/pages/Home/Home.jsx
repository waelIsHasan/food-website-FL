import Navbar from '../../components/Navbar/Navbar';
import "./Home.css";
import Button from "../../components/Button";
import burgar1 from "./burgar1.png";
import steak from "./steak.png";
import Menu from "../Menu";
import Card from "../../components/Card";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  const slides = [
    {
      heading: "Best Restaurant In Town.",
      parg: "we provide best food in town , we provide home delivery and dine in service",
      nb1: "Order now",
      nb2: "Reservation",
    },

    {
      heading: "Our Most Popular Dish.",
      parg: "this dish is full of  flavor and nutrition! and the essential amino amino acids your body needs , and also a good of fiber ",
      nb1: "Order now",
      nb2: "Reservation",
    },
  ];

  return (
    <>
      <div className="f-slide">
        <Slide
          heading={slides[0].heading}
          parg={slides[0].parg}
          nb1={slides[0].nb1}
          nb2={slides[0].nb2}
        />
      </div>
      <div className="s-slide">
        <Slide
          heading={slides[1].heading}
          parg={slides[1].parg}
          nb1={slides[1].nb1}
          nb2={slides[1].nb2}
          isLR={false}
        />
      </div>
      <Menu fromHome={true}/>
    </>
  );
}

function Slide({ heading, parg, nb1, nb2, isLR = true }) {
  if (isLR)
    return (
      <div className="intro">
        <div className="content">
          <h1>{heading}</h1>
          <p>{parg}</p>
          <Button name={nb1} width="medium" />
          <Button name={nb2} width="medium" />
        </div>
        <img className="burgar1-img" src={burgar1} alt="" />
      </div>
    );
  return (
    <div className="intro">
      <img className="burgar1-img" src={steak} alt="" />
      <div className="content">
        <h1>{heading}</h1>
        <p>{parg}</p>
        <Button name={nb1} width="medium" />
        <Button name={nb2} width="medium" />
      </div>
    </div>
  );
}
