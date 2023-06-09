import React from "react";
import MyButton from "./UI/button/MyButton";
import countryInfoStyle from "../styles/CountryInfo.module.css";
import backIcon from "../img/back_icon.svg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryInfo = ({ bordersCollection }) => {
  const [country, setCountry] = React.useState();
  const { name } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  return (
    <>
      {country && (
        <div className={countryInfoStyle.infoContainer}>
          <MyButton click={() => navigate(-1)} value={"Back"} icon={backIcon} />
          <div className={countryInfoStyle.infoBody}>
            <img src={country.flags.svg} alt={country.flag} />
            <div className={countryInfoStyle.informationBlock}>
              <h1 className={countryInfoStyle.countryName}>
                {country.name.common}
              </h1>
              <div className={countryInfoStyle.aboutCountry}>
                {country.name.nativeName && (
                  <p>
                    Native Name:
                    {
                      country.name.nativeName[
                        Object.keys(country.name.nativeName)[0]
                      ].common
                    }
                  </p>
                )}
                {country.population && <p>Population:{country.population}</p>}
                {country.region && <p>Region:{country.region}</p>}
                {country.subregion && <p>Sub Region:{country.subregion}</p>}
                {country.capital && <p>Capital:{country.capital[0]}</p>}
                {country.tld && <p>Top Level Domain: {country.tld[0]}</p>}
                {country.currencies && (
                  <p>
                    Currencies:
                    {
                      country.currencies[Object.keys(country.currencies)[0]]
                        .name
                    }
                  </p>
                )}
                {country.languages && (
                  <p>
                    Languages:
                    {Object.values(country.languages).map(
                      (lang) => `${lang}, `
                    )}
                  </p>
                )}
              </div>
              {country.borders && (
                <div className={countryInfoStyle.borders}>
                  <p>
                    Border Countries:
                    {country.borders.map((border) => {
                      return (
                        <Link key={border} to={`/${bordersCollection[border]}`}>
                          <MyButton value={bordersCollection[border]} />
                        </Link>
                      );
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryInfo;
