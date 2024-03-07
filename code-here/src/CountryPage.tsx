import React, { SetStateAction } from "react";
import { Container } from "react-bootstrap";

interface props {
  light: boolean;
  setSelect: React.Dispatch<SetStateAction<boolean>>;
}

const CountryPage: React.FC<props> = ({ light, setSelect }) => {
  return (
    <>
      <div
        className={`each-country-container ${
          light ? "light-theme" : "dark-theme"
        }`}
        style={{
          color: `${light ? "#000" : "#fff"}`,
        }}
      >
        <Container>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelect(false);
            }}
          >
            {" "}
            Back{" "}
          </button>
        </Container>
      </div>
    </>
  );
};

export default CountryPage;
