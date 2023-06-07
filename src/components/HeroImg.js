import React from "react";
import "./HeroImgStyles.css";
import IntroImg from "../assets/vecteezy_software-develper-working-on-laptop-at-home-office_6697113_631.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} className="into-img" alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi , I am Onur Abdulaji </p>
        <h1>.Net Developer</h1>
        <div>
          <Link to="/" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
