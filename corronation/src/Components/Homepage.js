import React from "react";
import "./Homepage.css";

import Dashboard from "./Dashboard";

import Menulist from "./Menulist";

const Homepage = () => {
  return (
    <div className="home-div">
      <Menulist />

      <Dashboard />
    </div>
  );
};

export default Homepage;
