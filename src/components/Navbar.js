import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, Setclick] = useState(false);
  const handleClick = () => Setclick(!click);

  const [color, Setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      Setcolor(true);
    } else {
      Setcolor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home </Link>
          <Link to="/Projects">Projects </Link>
          <Link to="/About">About </Link>
          <Link to="/Contact">Contact </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
