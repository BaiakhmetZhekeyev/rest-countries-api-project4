import React from "react";
import style from "../styles/restCountries.module.css";
import { Link } from "react-router-dom";

const CountriesBlock = ({ countries, countrySearch, region }) => {
  return (
    <div className={style.contentContainer}>
      {countries
        .filter((country) => (region ? country.region === region : true))
        .filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(countrySearch.toLowerCase())
        )
        .map((obj, index) => (
          <Link
            to={`/${obj.name.common}`}
            className={style.countryBlock}
            key={index}
          >
            <img src={obj.flags.svg} alt={obj.flag} />
            <div className={style.countryInfo}>
              <h5>{obj.name.common}</h5>
              <p>Population: {obj.population}</p>
              <p>Region: {obj.region}</p>
              <p>Capital: {obj.capital}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CountriesBlock;
