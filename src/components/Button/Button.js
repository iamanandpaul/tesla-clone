import React from "react";
import "./Button.css";

function Button({ title, info }) {
  return (
    <div className={`button ${info === "white" ? "button__white" : ""}`}>
      <a href="">{title}</a>
    </div>
  );
}

export default Button;
