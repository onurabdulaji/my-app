import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react1.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>I am Full Stack Developer</p>
        <Link to="./Contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} alt=".Net" className="img" />
          </div>{" "}
          <div className="img-stack bottom">
            <img src={react2} alt=".Net" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
