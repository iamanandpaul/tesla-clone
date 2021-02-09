import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button({ title, info }) {
  return (
    <div className={`button ${info === "white" ? "button__white" : ""}`}>
      <Link to="/">{title}</Link>
    </div>
  );
}

export default Button;
