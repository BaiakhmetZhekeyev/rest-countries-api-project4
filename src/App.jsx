import Header from "./сomponents/Header";
import Main from "./сomponents/Main";
import RestCountries from "./сomponents/RestCountries";
import { Routes, Route } from "react-router-dom";
import NotFound from "./сomponents/NotFound";
import CountryDetails from "./сomponents/CountryDetails";
import React from "react";

function App() {
  const [countries, setCountries] = React.useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path={"/"}
            element={
              <RestCountries
                countries={countries}
                setCountries={setCountries}
              />
            }
          />
          <Route path={"/country/:name"} element={<CountryDetails />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}
export default App;
