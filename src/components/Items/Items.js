import React from "react";
import Button from "../Button/Button";
import "./Items.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

function Items({
  title,
  desc,
  leftbtn,
  rightbtn,
  background,
  condition,
  button,
  arrow,
  main,
}) {
  return (
    <div className="items" style={{ backgroundImage: `url(${background})` }}>
      <h4>{title}</h4>
      <p>
        {desc}
        <Link to="/">{main}</Link>
      </p>
      <div className="items__buttons">
        <Button title={leftbtn} />
        {condition && <Button info={button} title={rightbtn} />}
      </div>
      {arrow && <ExpandMoreIcon className="items__arrow" />}
    </div>
  );
}

export default Items;
