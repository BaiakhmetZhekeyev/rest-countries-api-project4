import React from "react";
import style from "../styles/restCountries.module.css";
import axios from "axios";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import CountriesBlock from "./CountriesBlock";
import MyButton from "./UI/button/MyButton";
import darkMode from "../img/dark_mode_icon.svg";
import { Link, Routes, Route } from "react-router-dom";
import CountryInfo from "./CountryInfo";

const RestCountries = () => {
  const [region, setRegion] = React.useState("");
  const [countries, setCountries] = React.useState([]);
  const [countrySearch, setCountrySearch] = React.useState("");

  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://restcountries.com/v3.1/all",
    }).then((json) => {
      console.log(json.data);
      setCountries(json.data);
    });
  }, []);

  return (
    <div className={style.rootCountries}>
      <div className={style.countriesHeaderWrapper}>
        <Link to={"/"}>Where in the world?</Link>
        <MyButton value={"Dark Mode"} icon={darkMode} />
      </div>
      <div className={style.bodyWrapper}>
        <div className={style.filterWrapper}>
          <MyInput setSearchInput={setCountrySearch} />
          <MySelect
            setOption={setRegion}
            defaulValue="Filter by Region"
            options={[
              { label: "Africa", value: "Africa" },
              { label: "America", value: "Americas" },
              { label: "Asia", value: "Asia" },
              { label: "Europe", value: "Europe" },
              { label: "Oceania", value: "Oceania" },
            ]}
          />
        </div>
        <Routes>
          <Route
            path={"/"}
            element={
              <CountriesBlock
                countries={countries}
                countrySearch={countrySearch}
                region={region}
              />
            }
          />
          <Route path={"/:name"} element={<CountryInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default RestCountries;
