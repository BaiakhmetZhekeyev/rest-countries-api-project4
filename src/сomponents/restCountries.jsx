import React from "react";
import style from "../styles/restCountries.module.css";
import darkModeIcon from "../img/dark_mode_icon.svg";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons/SearchOutlined";
import MySelect from "./UI/select/MySelect";

const RestCountries = () => {
    const [countries, setCountries] = React.useState([]);
    const [dropDownActive, setDropDownActive] = React.useState("");
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
                    <img src={darkModeIcon} style={{ width: "20px" }} />
                    <label htmlFor="">Dark Mode</label>
                </button>
            </div>
            <div className={style.bodyWrapper}>
                <div className={style.filterWrapper}>
                    <input
                        src={<SearchOutlined/>}
                        className={style.searchCountryInput}
                        type="text"
                        placeholder={"Search for a Country..."}
                        onChange={(e) => setCountrySearch(e.target.value)}
                    />
                    <MySelect
                        defaulValue="Регион"
                        options={[
                            {key: 'AfricaRegion', name: 'Africa'},
                            {key: 'AmericaRegion', name: 'America'},
                            {key: 'AsiaaRegion', name: 'Asia'},
                            {key: 'EuropeRegion', name: 'Europe'},
                            {key: 'OceniaRegion', name: 'Ocenia'},
                        ]}
                    />
                    {/*<div className={style.dropdownFilter}>*/}
                    {/*    <button*/}
                    {/*        className={style.dropDownButton}*/}
                    {/*        onClick={() =>*/}
                    {/*            dropDownActive === ""*/}
                    {/*                ? setDropDownActive(" active")*/}
                    {/*                : setDropDownActive("")*/}
                    {/*        }*/}
                    {/*    >*/}
                    {/*        {" "}*/}
                    {/*        Filter by Region{" "}*/}
                    {/*    </button>*/}
                    {/*    <div className={style.dropdownContent + dropDownActive}>*/}
                    {/*        <div className={style.regionCheckbox}>*/}
                    {/*            <label htmlFor="regionAfrica">Africa</label>*/}
                    {/*            <input type={"checkbox"} id={"regionAfrica"} />*/}
                    {/*        </div>*/}
                    {/*        <div className={style.regionCheckbox}>*/}
                    {/*            <label htmlFor="regionAmerica">America</label>*/}
                    {/*            <input type={"checkbox"} id={"regionAmerica"}/>*/}
                    {/*        </div>*/}
                    {/*        <div className={style.regionCheckbox}>*/}
                    {/*            <label htmlFor="regionAsia">Asia</label>*/}
                    {/*            <input type={"checkbox"} id={"regionAsia"} />*/}
                    {/*        </div>*/}
                    {/*        <div className={style.regionCheckbox}>*/}
                    {/*            <label htmlFor="regionEurope">Europe</label>*/}
                    {/*            <input type={"checkbox"} id={"regionEurope"} />*/}
                    {/*        </div>*/}
                    {/*        <div className={style.regionCheckbox}>*/}
                    {/*            <label htmlFor="regionOcenia">Ocenia</label>*/}
                    {/*            <input type={"checkbox"} id={"regionOcenia"}/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

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

export { RestCountries };
