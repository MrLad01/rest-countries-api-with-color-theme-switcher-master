import AllCountries from "./AllCountries";
import CountryPage from "./CountryPage";
import NavBar from "../Components/NavBar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MainPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // for storing the data gotten from the api
  const [light, setLight] = useState<boolean>(false); // for the light mode, notifying if it is on or off
  const [selectedCountry, setSelectedCountry] = useState<string>(""); // for storing the name of the selected country
  const [showSelectedCountry, setShowSelectedCountry] =
    useState<boolean>(false); // for checking if a particlar country is selected or not

  useEffect(() => {
    if (data.length === 0) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://restcountries.com/v3.1/all"
          );
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData(); // Call the function to fetch data
    }
  }, []); // Empty dependency array ensures fetching only once

  return (
    <>
      {/* for the navigation bar */}
      <NavBar light={light} setLight={setLight} />{" "}
      {/* for either displaying all the countries or details on a selected country */}
      {!showSelectedCountry ? (
        <AllCountries
          data={data}
          light={light}
          setSelect={setShowSelectedCountry}
          setCountry={setSelectedCountry}
        />
      ) : (
        <CountryPage
          data={data}
          light={light}
          setSelect={setShowSelectedCountry}
          country={selectedCountry}
        />
      )}
    </>
  );
};

export default MainPage;
