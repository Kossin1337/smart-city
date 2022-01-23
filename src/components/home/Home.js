import React, { useEffect, useState } from "react";
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
          <h2>Page Scroll Effects</h2>
        </div>
      </section>

      <section className="cd-section-1">
        <div>
          <h2>Section 2</h2>
        </div>
      </section>

      <section className="cd-section-2">
        <div>
          <h2>Section 3</h2>
        </div>
      </section>

      <section className="cd-section-3">
        <div>
          <h2>Section 4</h2>
        </div>
      </section>

      <section className="cd-section-4">
        <div>
          <h2>Section 5</h2>
        </div>
      </section>

      <nav>
        <ul className="cd-vertical-nav">
          <li onClick={() => setCurrentSlide(currentSlide - 1)}>Prev</li>
          <li onClick={() => setCurrentSlide(currentSlide + 1)}>Next</li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
