import React from 'react';
import {SearchOutlined} from "@ant-design/icons/SearchOutlined";
import classes from "./Myinput.module.css";

const MyInput = () => {
    return (
        <input
            src={<SearchOutlined/>}
            className={classes.searchCountryInput}
            type="text"
            placeholder={"Search for a Country..."}
            // onChange={(e) => setCountrySearch(e.target.value)}
        />
    );
};

export default MyInput;