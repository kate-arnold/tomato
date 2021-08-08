import React from "react";
import tomatoImage1 from "./images/tomato.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div className="align-center">
        <img className="Tomato__image" src={tomatoImage1} alt="Tomatoes" />
      </div>
    );
  }
}

export default Footer;
