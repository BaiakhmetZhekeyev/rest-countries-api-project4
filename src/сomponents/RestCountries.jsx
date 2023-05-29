import React from "react";
import style from "../styles/restCountries.module.css";
import darkModeIcon from "../img/dark_mode_icon.svg";
import axios from "axios";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const RestCountries = () => {
    const [region, setRegion] = React.useState('');
    const [countries, setCountries] = React.useState([]);
    const [countrySearch, setCountrySearch] = React.useState("");

    function getAxiosResult() {
        axios({
            method: "get",
            url: "https://restcountries.com/v3.1/all",
        }).then((json) => {
            console.log(json.data[0]);
            setCountries(json.data);
        });
    }

    return (
        <div className={style.rootCountries}>
            <div className={style.countriesHeaderWrapper}>
                <h1>Where in the world?</h1>
                <button className={style.darkMode}>
                    <img alt={"darkMode"} src={darkModeIcon} style={{ width: "20px" }} />
                    <label htmlFor="">Dark Mode</label>
                </button>
            </div>
            <div className={style.bodyWrapper}>
                <div className={style.filterWrapper}>
                    <MyInput/>
                    <MySelect  setOption = {setRegion}  defaulValue="Filter by Region"
                        options={[
                            {value: 'Africa'},
                            {value: 'America'},
                            {value: 'Asia'},
                            {value: 'Europe'},
                            {value: 'Ocenia'},
                        ]}
                    />
                </div>
                <div className={style.response}>
                    <button onClick={() => getAxiosResult()}>
                        Get response from Server
                    </button>
                </div>
                <div className={style.contentContainer}>
                    {countries
                        .filter((country) =>
                            country.name.common
                                .toLowerCase()
                                .includes(countrySearch.toLowerCase())
                        )
                        .map((obj, index) => (
                            <div className={style.countryBlock} key={index}>
                                <img src={obj.flags.svg} alt={obj.flag} />
                                <div className={style.countryInfo}>
                                    <h5>{obj.name.common}</h5>
                                    <p>Population: {obj.population}</p>
                                    <p>Region: {obj.region}</p>
                                    <p>Capital: {obj.capital}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RestCountries;
