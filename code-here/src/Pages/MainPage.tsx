import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import AllCountries from "./AllCountries";
import CountryPage from "./CountryPage";

const MainPage: React.FC = () => {
  const [light, setLight] = useState<boolean>(false);
  const [showSelectedCountry, setShowSelectedCountry] =
    useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  return (
    <>
      <NavBar light={light} setLight={setLight} />
      {!showSelectedCountry ? (
        <AllCountries
          light={light}
          setSelect={setShowSelectedCountry}
          setCountry={setSelectedCountry}
        />
      ) : (
        <CountryPage
          light={light}
          setSelect={setShowSelectedCountry}
          country={selectedCountry}
        />
      )}
    </>
  );
};

export default MainPage;
