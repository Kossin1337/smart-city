import React from "react";
import smartCity from "../../images/smart-city.png";
import "./styles.scss";

const HomeContent = () => {
  const prosArray = [
    "Less Crime",
    "Improved infrastructure",
    "Safer Communication",
    "Efficient Public Services"
  ];
  const consArray = [
    "Limited privacy",
    "Social control",
    "Excess network trust",
    "Security and data privacy concerns"
  ];
  return (
    <div>
      <div className="home-content">
        <div className="info">
          <h1>What is a Smart City?</h1>
          <p>
            {" "}<span>SMART CITY </span>uses information and communication
            technology (ICT) to improve operational efficiency, share
            information with the public and provide a better quality of
            government service and citizen welfare.{" "}
          </p>
        </div>
        <div class="images">
          <img src={smartCity} class="shape" alt="" />
        </div>
      </div>
      <div className="pros-cons, home-content">
        <div className="advantages">
          <h1>Advantages</h1>
          <ul>
            {prosArray.map(elm => {
              return (
                <li>
                  {elm}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="disadvantages">
          <h1>Disadvantages</h1>
          <ul>
            {consArray.map(elm => {
              return (
                <li>
                  {elm}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
