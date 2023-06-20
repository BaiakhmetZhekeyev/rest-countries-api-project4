import React from "react";
import axios from "axios";
import Filter from "./Filter";
import { ALL_COUNTRIES } from "../config";
import Card from "../Card";
import List from "./List";
import { useNavigate } from "react-router-dom";

const RestCountries = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = React.useState(countries);
  const navigate = useNavigate();
  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((country) => country.region == region);
    }
    if (search) {
      data = data.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredCountries(data);
  };

  React.useEffect(() => {
    if (!countries.length) {
      axios({
        method: "get",
        url: ALL_COUNTRIES,
      }).then((json) => {
        setCountries(json.data);
        setFilteredCountries(json.data);
      });
    }
  }, []);

  return (
    <>
      <Filter onSearch={handleSearch} />
      <List>
        {filteredCountries.map((country) => {
          const countryDetails = {
            img: country.flags.png,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital[0],
          };
          return (
            <Card
              key={country.name.common}
              {...countryDetails}
              onClick={() => navigate(`/country/${country.name.common}`)}
            />
          );
        })}
      </List>
    </>
  );
};

export default RestCountries;
