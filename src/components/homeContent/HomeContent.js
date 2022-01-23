import React from 'react';
import smartCity from "../../images/smartcity.svg"
import "./styles.scss"


const HomeContent = () => {
    const prosArray = ["Less Crime", "Improved infrastructure", "Safer Communication", "Efficient Public Services"]
  return <>
  <div className='home-content'>
      <div className='info'>
          <h1>What is a Smart City?</h1>
          <p> <span>SMART CITY </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap </p>
      </div>
      <div class="images">
                    {/* <img src={smartCity} class="shape" alt='' /> */}
      </div>
  </div>
  <div className='pros-cons, home-content'>
      <div className='advantages'>
          <h1>Advantages</h1>
          <ul>
        {prosArray.map((elm)=> {
            return <li>{elm}</li>
        })}
          </ul>
      </div>
      <div className='disadvantages'>
      <h1>Disadvantages</h1>
          <ul>
        {prosArray.map((elm)=> {
            return <li>{elm}</li>
        })}
          </ul>
      </div>
  </div>
  </>
};

export default HomeContent;
