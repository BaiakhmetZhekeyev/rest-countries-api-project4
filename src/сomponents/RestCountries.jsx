import React from "react";
import style from "../styles/restCountries.module.css";
import axios from "axios";
import CountriesBlock from "./CountriesBlock";
import { Link, Routes, Route } from "react-router-dom";
import CountryInfo from "./CountryInfo";
import Header from "./Header";

const RestCountries = () => {
  const [countries, setCountries] = React.useState([]);
  const borders = {};

  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://restcountries.com/v3.1/all",
    }).then((json) => {
      console.log(json.data);
      setCountries(json.data);
    });
  }, []);

  countries.map((obj) => {
    borders[obj.cca3] = obj.name.common;
  });

  return (
    <div className={style.rootCountries}>
      {/*<div className={style.countriesHeaderWrapper}>*/}
      {/*  <Link to={"/"}>Where in the world?</Link>*/}
      {/*  <MyButton value={"Dark Mode"} icon={darkMode} />*/}
      {/*</div>*/}
      <Header />
      <div className={style.bodyWrapper}>
        <Routes>
          <Route
            path={"/"}
            element={<CountriesBlock countries={countries} />}
          />
          <Route
            path={"/:name"}
            element={<CountryInfo bordersCollection={borders} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default RestCountries;
