import React from 'react';

import "./Navbar.scss"

const Navbar = (props) => {
  return <>
  <div className='navbar'>
    <h1>{props.title} </h1>
  </div>
  </>
};

export default Navbar;
