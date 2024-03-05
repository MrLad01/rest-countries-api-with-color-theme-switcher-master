import React, { useState } from "react";
import NavBar from "./NavBar";
import AllCountries from "./AllCountries";

const MainPage: React.FC = () => {
  const [light, setLight] = useState<boolean>(false);

  return (
    <>
      <NavBar light={light} setLight={setLight} />
      <AllCountries light={light} />
    </>
  );
};

export default MainPage;
