import React from "react";
import classes from "./MyInput.module.css";
import { SearchOutlined } from "@ant-design/icons";
const MyInput = ({ setSearchInput }) => {
  return (
    <div className={classes.searchBlock}>
      <input
        className={classes.searchCountryInput}
        type="text"
        placeholder={"Search for a Country..."}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className={classes.searchIcon}>
        <SearchOutlined />
      </div>
    </div>
  );
};

export default MyInput;
