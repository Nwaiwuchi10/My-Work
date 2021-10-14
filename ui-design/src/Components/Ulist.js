import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { List, Typography } from "@material-ui/core";

import "./Ulist.css";
import {
  EventAvailableOutlined,
  ContactSupport,
  HomeOutlined,
  Message,
  Settings,
  LocalDiningOutlined,
  ReportOffOutlined,
} from "@material-ui/icons";
const Ulist = () => {
  return (
    <div className="head">
      <div className="header">
        <div className="header2">
          <hr className="hrt" />
          <div className="cont">
            <div className="cont1">
              <div className="typo">
                <Typography className="nad">CORONATION</Typography>
              </div>
              <img className="img1" src="./pix/pix.jpg" alt="" />
              <span>
                <Typography className="sh8" variant="h8">
                  Mukhtar Saliu
                </Typography>
                <Typography className="sh9" variant="h8">
                  ID: AI123PQ79
                </Typography>
              </span>

              <div className="icon-div">
                <useScrollTrigger>
                  <ul className="uli">
                    <HomeOutlined className="hicon" />
                    <List className="Listt"> My Dashboard</List>

                    <br />
                    <FaUserAlt className="hicon1" />
                    <List className="Listt"> ShareHolding</List>
                    <br />

                    <EventAvailableOutlined className="hicon2" />
                    <List className="Listt">Transaction</List>
                    <br />
                    <ReportOffOutlined className="hicon3" />
                    <List className="Listt">Report</List>
                    <br />
                    <Message className="hicon4" />
                    <List className="Listt">Message</List>
                    <br />
                    <Settings className="hicon5" />
                    <List className="Listt"> Settings</List>
                    <br />
                    <ContactSupport className="hicon6" />
                    <List className="Listt">Support</List>
                    <br />
                    <LocalDiningOutlined className="hicon7" />
                    <List className="Listt">Log Out</List>
                  </ul>
                </useScrollTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ulist;
