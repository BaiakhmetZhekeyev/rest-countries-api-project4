import React from "react";
import style from "../styles/restCountries.module.css";
import { Link } from "react-router-dom";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const CountriesBlock = ({ countries }) => {
  const [countrySearch, setCountrySearch] = React.useState("");
  const [region, setRegion] = React.useState("");
  return (
    <>
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
      <div className={style.contentContainer}>
        {countries
          .filter((country) => (region ? country.region === region : true))
          .filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(countrySearch.toLowerCase())
          )
          .map((obj) => (
            <Link
              to={`/${obj.name.common}`}
              className={style.countryBlock}
              key={obj.cca3}
            >
              <img src={obj.flags.svg} alt={obj.flag} />
              <div className={style.countryInfo}>
                <h3>{obj.name.common}</h3>
                <h4>
                  Population: <span>{obj.population}</span>
                </h4>
                <h4>
                  Region: <span>{obj.region}</span>
                </h4>
                <h4>
                  Capital: <span>{obj.capital}</span>
                </h4>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default CountriesBlock;
