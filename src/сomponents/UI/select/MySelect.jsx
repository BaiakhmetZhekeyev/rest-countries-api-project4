import React from "react";
import { Select } from "antd";

const MySelect = ({ options, defaulValue, setOption }) => {
  return (
    <Select
      onChange={setOption}
      showArrow={false}
      style={{ width: "150px" }}
      placeholder={defaulValue}
      options={options}
      size={"large"}
    />
  );
};

export default MySelect;
