import React, { useState } from "react";
import NavBar from "./NavBar";
import AllCountries from "./AllCountries";
import CountryPage from "./CountryPage";

const MainPage: React.FC = () => {
  const [light, setLight] = useState<boolean>(false);
  const [showSelectedCountry, setShowSelectedCountry] =
    useState<boolean>(false);

  return (
    <>
      <NavBar light={light} setLight={setLight} />
      {!showSelectedCountry ? (
        <AllCountries light={light} setSelect={setShowSelectedCountry} />
      ) : (
        <CountryPage light={light} setSelect={setShowSelectedCountry} />
      )}
    </>
  );
};

export default MainPage;
