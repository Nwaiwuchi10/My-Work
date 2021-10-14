import { List, Typography } from "@material-ui/core";

import {} from "@material-ui/icons";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="hod">
      <div className="divhr">
        <hr className="hr-div" />
      </div>
      <nav className="nav">
        <FaEnvelope className="icc" />
      </nav>
      <div className="hid">
        <div className="slider">
          <figure>
            <img alt="" src="./firstmobile.jpeg" className="advert" />
            <img alt="" src="./images/union.jpeg" className="advert" />
            <img alt="" src="/images/img.png" className="advert" />
          </figure>
          <img className="advert" src="./images/union.jpeg" alt="" />
        </div>
        <Typography className="puyol" variant="h4">
          Dashboard
        </Typography>
        <div className="bod">
          <h1 className="hh">View Holdings</h1>
          <h2 className="hh2">Summary</h2>
          <div className="circle"></div>
        </div>
        <div className="job">
          <ul className="uli">
            <List>Shares</List>
            <br />
            <List className="jak">Total Shares</List>
            <br />
            <List>5242</List>
          </ul>
          <div className="sect">
            <select className="select">
              <option>ACCESS BANK PLC</option>
              <option>WAPIC INSURANCE PLC</option>
            </select>
          </div>
          <Typography className="va" variant="body1">
            Total Valuation
          </Typography>
          <Typography className="va2">N513,000</Typography>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
