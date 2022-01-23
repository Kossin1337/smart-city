import React, { useEffect, useState } from "react";
import BasicPage from "../BasicPage";
import HomeContent from "../homeContent/HomeContent";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import "./Home.scss"
import Garbage from "../garbage/Garbage";
import shoppingImg from "../../images/shopping.png";
import trafficImg from "../../images/traffic.png";
import environmentImg from "../../images/environment.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const className = "cd-section-" + currentSlide;
    const element = document.getElementsByClassName(className)
    if (element.length > 0) {
      element[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
  }, [currentSlide]);
  return (
    <div className="home">
      <section className="cd-section-0">
        <div>
          <Navbar title="Smart City" />
          <HomeContent />
        </div>
      </section>
      <section className="cd-section-1">
        <div>
          <Navbar title="Garbage Collecting" />
          <Garbage />
        </div>
      </section>
      <section className="cd-section-2">
        <div>
          <Navbar title="Shopping" />
          <BasicPage 
            title="Shopping made easy without leaving home"
            subTitle="The Smart City is all about improving daily life of the citizens"
            image={shoppingImg}
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </div>
      </section>
      <section className="cd-section-3">
        <div>
          <Navbar title="Traffic system in Smart City" />
          <BasicPage 
            title="Traffic system in Smart City"
            subTitle="The Smart City is all about improving daily life of the citizens"
            image={trafficImg}
            para="A Smart City has the potential to drastically improve the current level of transportation throughout a city. It will have better traffic management, the ability to track public transportations and serve its citizens better with constant information and low prices"
          />
        </div>
      </section>
      <section className="cd-section-4">
        <div>
          <Navbar title="Environment & Smart City" />
          <BasicPage 
            title="Environment & Smart City"
            subTitle="Visualize and analyze all the city data to better decide when and how to act"
            image={environmentImg}
            para="A smart city has thousands of energy-efficient buildings that can improve the air quality, use renewable energy sources, and decrease the dependence on non-renewable energy sources. These will help to decrease the ecological impact we have on the environment"
          />
        </div>
      </section>

      <section className="cd-section-5">
        <div>
          <Navbar title="Contact" />
          <Contact />
        </div>
      </section>

      <nav>
        <ul className="cd-vertical-nav">
          <li onClick={() => setCurrentSlide(currentSlide - 1)}><FontAwesomeIcon icon={faSortUp} /></li>
          <li onClick={() => setCurrentSlide(currentSlide + 1)}><FontAwesomeIcon icon={faSortDown} /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
