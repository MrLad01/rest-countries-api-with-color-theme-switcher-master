import AllCountries from "./AllCountries";
import CountryPage from "./CountryPage";
import NavBar from "../Components/NavBar";
import React, { useState } from "react";

const MainPage: React.FC = () => {
  const [light, setLight] = useState<boolean>(false); // for the light mode, notifying if it is on or off
  const [selectedCountry, setSelectedCountry] = useState<string>(""); // for storing the name of the selected country
  const [showSelectedCountry, setShowSelectedCountry] =
    useState<boolean>(false); // for checking if a particlar country is selected or not

  return (
    <>
      {/* for the navigation bar */}
      <NavBar light={light} setLight={setLight} />{" "}
      {/* for either displaying all the countries or details on a selected country */}
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
