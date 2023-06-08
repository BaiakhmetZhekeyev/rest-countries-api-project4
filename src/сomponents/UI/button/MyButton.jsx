import React from "react";
import classes from "./MyButton.module.css";
const MyButton = ({ click, value, icon }) => {
  return (
    <button onClick={click} className={classes.myButton}>
      {icon ? <img src={icon} alt={icon} /> : <></>}
      <label htmlFor="">{value}</label>
    </button>
  );
};

export default MyButton;
