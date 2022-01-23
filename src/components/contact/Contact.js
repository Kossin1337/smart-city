import React from 'react';

import "./contact.scss"

const Contact = (props) => {
  return (<>
  <div className='contact'>
  <div>
   <h1>How {props.title} Can improve your daily Life</h1>
    <p> Contribute & Have an impact </p>
    </div>
    <form name="contact" method="POST" data-netlify="true">
      <p>Name</p>
      <input type="text" name='name' />
      <p>Email</p>
      <input type="email" name='email' />
      <p>Message</p>
      <input id='message' type="text" height="50" name='message' />
      <button type='submit'>Submit</button>
    </form>
  </div>
  </>);
};

export default Contact;
