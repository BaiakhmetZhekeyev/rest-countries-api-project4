import React from "react";
import Search from "./UI/Search";
import { CustomSelect } from "./UI/CustomSelect";
import styled from "styled-components";

const options = [
  { label: "Africa", value: "Africa" },
  { label: "America", value: "Americas" },
  { label: "Asia", value: "Asia" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Filter = () => {
  const [search, setSearch] = React.useState("");
  const [region, setRegion] = React.useState("");

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder={"Filter by Region"}
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Filter;
