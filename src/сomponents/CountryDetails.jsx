import React from "react";
import { useParams } from "react-router-dom";
const CountryDetails = () => {
  const { name } = useParams();
  return <div>Details of {name}</div>;
};

export default CountryDetails;
