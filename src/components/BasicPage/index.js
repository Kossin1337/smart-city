import React from 'react';
import "./basicpage.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

const BasicPage = (props) => {
  return <>
  <div className='basic-page'>
    <div>
   <h1>How {props.title} Can improve your daily Life</h1>
    <p> {props.title}</p>
    </div>
    <div className='cards'>
        <div className='card-content'>
          <div className='card-icon'>
          <FontAwesomeIcon className='icon' icon={faSortUp} />
          </div>
        </div>
        <div className='card-content'>
        <div className='card-icon'>
          <FontAwesomeIcon className='icon' icon={faSortUp} />
          </div>
        </div>
        <div className='card-content'>
        <div className='card-icon'>
          <FontAwesomeIcon className='icon' icon={faSortUp} />
          </div>
        </div>
        <div className='card-content'>
        <div className='card-icon'>
          <FontAwesomeIcon className='icon' icon={faSortUp} />
          </div>
        </div>
    </div>
  </div>
  </>
};

export default BasicPage;
