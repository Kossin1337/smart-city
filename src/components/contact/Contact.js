import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div>
          <h1>Help us build a better future</h1>
          <p> Contribute & Have an impact </p>
        </div>
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <p>Name</p>
          <input type="text" name="name" />
          <p>Email</p>
          <input type="email" name="email" />
          <p>Message</p>
          <input id="message" type="text" height="50" name="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
