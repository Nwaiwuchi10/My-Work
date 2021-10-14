import { List, Typography } from "@material-ui/core";
import {
  HelpRounded,
  HomeOutlined,
  Message,
  Report,
  Settings,
} from "@material-ui/icons";
import { FaArrowCircleLeft, FaAward, FaUser } from "react-icons/fa";
import React from "react";
import "./Menulist.css";
const Menulist = () => {
  //   (function () {
  //     ".wrapper1".Scroll(function () {
  //       ".hr-div".ScrollUp($(".wrapper1").Scrolllup());
  //     });
  //     ".hr-div".Scroll(function () {
  //       ".wrapper1".ScrollUp($(".hr-div").Scrolllup());
  //     });
  //   });
  return (
    <div className="Head">
      <div className="wrapper1"> </div>
      <div className="Header">
        <div className="tap">
          <Typography className="type" variant="h5">
            CORONATION
          </Typography>
        </div>
        <div className="icon-d">
          <FaUser />
        </div>
        <Typography className="sh8" variant="h8">
          Mukhtar Saliu
        </Typography>
        <Typography className="sh9" variant="h8">
          ID: AI123PQ79
        </Typography>

        <hr className="hr" />

        <ul className="ul">
          <List className="ul-dash">
            <HomeOutlined className="icons-list" /> My Dashboard
          </List>
          <List>
            <Report className="icons-list" /> Report
          </List>
          <List>
            <FaAward className="icons-list" /> Prenium
          </List>
          <List>
            <Message className="icons-list" /> Message
          </List>
          <List>
            <Settings className="icons-list" /> Settings
          </List>
          <List>
            <HelpRounded className="icons-list" /> Support
          </List>
          <List>
            <FaArrowCircleLeft className="icons-list" /> LogOut
          </List>
        </ul>
      </div>
    </div>
  );
};

export default Menulist;
