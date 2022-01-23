import React, { useEffect, useState } from "react";
import BasicPage from "../BasicPage";
import HomeContent from "../homeContent/HomeContent";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import "./Home.scss"
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
          <BasicPage title="Garbage Collecting" />
        </div>
      </section>

      <section className="cd-section-2">
        <div>
          <Navbar title="Contact" />
          <Contact title="Contact" />
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
