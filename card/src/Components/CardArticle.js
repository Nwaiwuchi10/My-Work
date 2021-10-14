import React from "react";

const CardArticle = ({ task }) => {
  return (
    <div className="cont">
      <div className="conts">
        <img src="./pix/j.gif" alt="" />
        <p className="pp"> {task.title}</p>
      </div>
    </div>
  );
};

export default CardArticle;
