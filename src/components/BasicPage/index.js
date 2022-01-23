import React from "react";
import "./basicpage.scss";

const BasicPage = ({ title, subTitle, image, para }) => {
  return (
    <div>
      <div className="basic-page">
        <div>
          <h1>
            {title}
          </h1>
          <p>
            {" "}{subTitle}
          </p>
        </div>
        <div className="cards">
          <div className="card-content">
            {para}
          </div>
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicPage;
