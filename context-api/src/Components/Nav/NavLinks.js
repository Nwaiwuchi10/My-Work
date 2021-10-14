import { List, Select } from "@material-ui/core";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="NavLinks">
      <div className="Nav-div">
        <input type="checkbox" id="check"></input>
        <div className="img-src">
          <img className="img-col" src="./images/mie.jpg" alt="" />
        </div>
        <div className="trans">translogic</div>
        <label for="check" className="checkbtn">
          <Link to="#">
            {" "}
            <FaBars onClick={showSidebar} className="a-icons" />
          </Link>
          <div> MENU </div>
        </label>

        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="Ul-div" onClick={showSidebar}>
            <List className="li"> Home</List>

            <List className="li">Features</List>

            <List className="li">About Us</List>
            <List className="li">Services</List>
            <List className="li">News</List>
            <List className="li"> Contacts</List>
          </ul>
        </div>

        <div className="line-div"></div>
        <div className="Icons-search">
          <FaSearch />{" "}
        </div>
        <div>
          <FaTimes className="fa-icons" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
