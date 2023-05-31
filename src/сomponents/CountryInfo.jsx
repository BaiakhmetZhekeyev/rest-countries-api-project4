import React from "react";
import MyButton from "./UI/button/MyButton";
import countryInfoStyle from "../styles/CountryInfo.module.css";
import backIcon from "../img/back_icon.svg";

const CountryInfo = ({ country }) => {
  return (
    <div className={countryInfoStyle.infoContainer}>
      <MyButton value={"Back"} icon={backIcon} />
      <div className={countryInfoStyle.infoBody}>
        <img src={country.flags.svg} alt={country.flag} />
        <div className={countryInfoStyle.informationBlock}>
          <h1 className={countryInfoStyle.countryName}>
            {country.name.common}
          </h1>
          <div className={countryInfoStyle.aboutCountry}>
            <p>Native Name:</p>
            <p>Population:</p>
            <p>Region:</p>
            <p>Sub Region:</p>
            <p>Capital:</p>
            <p>Top Level Domain:</p>
            <p>Currencies:</p>
            <p>Languages:</p>
          </div>
          <div className={countryInfoStyle.borderCountries}>
            <p>Border Countries:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
