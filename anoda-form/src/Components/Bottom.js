import React, { useState } from "react";
import "./Buttom.css";
import axios from "axios";
import { FaAppStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bottom = () => {
  const [task, setTask] = useState([]);

  const getTask = () => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      setTask(response.data);
      console.log(task);
    });
  };

  return (
    <div className="main">
      <div className="boss">
        <Link to="./Signup">
          {" "}
          <FaAppStore />{" "}
        </Link>
        <h1>Meme Generator</h1>
      </div>

      <div className="boss1">
        <label className="lb1">Top Text </label>
        <input type="text" placeholder="Input Your Top Text" />
        <br />
        <label className="lb2">Bottom Text </label>
        <input
          className="input1"
          type="text"
          placeholder="Input Your Bottom Text"
        />
        <br />
        <button button onClick={getTask} className="btn1">
          {" "}
          <h5>Submit </h5>
        </button>

        <div className="boss2">
          {/* {task.map((tasks) => (<h1 key={tasks.id} >  {tasks.id.name} </h1>))}   */}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
