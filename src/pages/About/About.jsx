import "./About.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import Button from "../../components/Button";
import chef1 from "./Dlear1.jpg";
import Card from "../../components/Card/Card";

export default function About() {
  return (
    <div class="about-us">
      <Slide />
      <Slide isLeft={false} />
      <div className="ceo">
        <Card className="about-img" isChef={true} img={chef1} />
        <div className="about-contect-ceo">
            <h1>Owner <strong>& Executive Chef</strong></h1>
            <h2>Mhd Dlear Daoud</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, totam. Molestiae, voluptates deleniti. Accusantium rerum ab incidunt placeat explicabo veritatis molestias cumque corrupti deleniti temporibus animi, maiores nobis id obcaecati.</p>
        </div>
      </div>
    </div>
  );
}

function Slide({ isLeft = true }) {
  return (
    <div className="slide">
      {isLeft && (
        <div className="bg-1">
          <div className="bg-2">
            <img src={img1} alt="" />
          </div>
        </div>
      )}
      <div className="info">
        {isLeft && <h1>About Our Restaurant</h1>}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          veritatis consequuntur alias, voluptate accusantium et doloribus culpa
          quibusdam labore non sint beatae! Recusandae aspernatur explicabo
          laborum enim consectetur, sit quos.
        </p>
        {isLeft && <Button width={"meduim"} name={"Order"} />}
      </div>
      {!isLeft && (
        <div className="bg-1">
          <div className="bg-2">
            <img src={img2} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
