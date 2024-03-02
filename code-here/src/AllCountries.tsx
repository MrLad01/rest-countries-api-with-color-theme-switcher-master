import React, { useState } from "react";
import NavBar from "./NavBar";

const AllCountries: React.FC = () => {
  const [light, setLight] = useState<boolean>(false);

  return (
    <>
      <NavBar light={light} setLight={setLight} />
    </>
  );
};

export default AllCountries;
