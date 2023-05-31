import React from "react";
import style from "../styles/restCountries.module.css";
import darkModeIcon from "../img/dark_mode_icon.svg";
import axios from "axios";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import CountriesBlock from "./CountriesBlock";
import CountryInfo from "./CountryInfo";
import MyButton from "./UI/button/MyButton";
import darkMode from "../img/dark_mode_icon.svg";

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
        <h1>Where in the world?</h1>
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
        <CountryInfo country={countries[0]} />
        {/*<CountriesBlock*/}
        {/*  countries={countries}*/}
        {/*  countrySearch={countrySearch}*/}
        {/*  region={region}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default RestCountries;
