import React, { useEffect, useState } from "react";
import "./Article.css";
import axios from "axios";
import CardArticle from "./CardArticle";
import * as ReactBootstrap from "react-bootstrap";

const Card = ({ task, waka }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const data = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res);
          setTasks(res.data);
        });
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container">
      <h2>All articles</h2>

      <div className="kat">
        {loading ? (
          <ReactBootstrap.Spinner animation="border" className="spin" />
        ) : (
          task
        )}
        {tasks.map((task) => (
          <CardArticle className="jaw" key={task.id} task={task}></CardArticle>
        ))}
      </div>
    </div>
  );
};

export default Card;
