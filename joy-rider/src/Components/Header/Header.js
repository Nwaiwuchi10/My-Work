import React from "react";
import NavBar from "../../Components/Nav/NavBar";
import "./Header.css";
import { FaCar, FaCaretRight, FaPlane, FaShip, FaTrain } from "react-icons/fa";
const Header = () => {
  return (
    <div className="Header-div">
      <div className="slider">
        <figure>
          <div className="slide">
            <img src="./Translogic/pix5.jpeg" alt="" />
          </div>

          <div className="slide">
            <img src="./Translogic/pix16.jpeg" alt="" />
          </div>

          <div className="slide">
            <img src="./Translogic/pix14.jpeg" alt="" />
          </div>

          <div className="slide">
            <img src="./Translogic/pix3.jpeg" alt="" />
          </div>

          <div className="slide">
            <img src="./Translogic/pix7.jpeg" alt="" />
          </div>
        </figure>
        <NavBar />
      </div>
      <div className="head-border">
        <div className="bord-div">
          <FaPlane className="icon" /> <h6>Air</h6> <p>Transportation</p>
        </div>
        <div className="bord-div">
          <FaShip className="icon" />
          <h6> Sea</h6> <p> Transportation</p>
        </div>
        <div className="bord-div">
          <FaTrain className="icon" />
          <h6>Train</h6> <p> Transportation</p>
        </div>
        <div className="bord-div">
          <FaCar className="icon" />
          <h6>Car</h6> <p>Transportation</p>
        </div>
        <div className="liner-div">
          <h3>JoyRide</h3> <p>Transportation </p>
          <h4>
            Our Translogic services is very fast and save. We stand behind your
            promise
          </h4>
          <h5>
            Our professional team keeps to standard and of quality experience
          </h5>
        </div>
        <div className="bod-border">
          <p>Read More</p> <FaCaretRight className="iconic" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
