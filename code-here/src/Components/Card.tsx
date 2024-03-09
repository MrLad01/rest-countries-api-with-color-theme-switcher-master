import { Card, Col, Container } from "react-bootstrap";
import { numberWithCommas } from "../Helpers/helpers";
import React, { SetStateAction } from "react";

// for the props of the page
interface props {
  light: boolean; // for the light and dark mode
  setCountry: React.Dispatch<SetStateAction<string>>; // for storing the name of the selected country
  setSelect: React.Dispatch<SetStateAction<boolean>>; // for checking if a country is selected
}

const RenderCards: React.FC<props & { countries: any[] }> = ({
  setSelect,
  setCountry,
  light,
  countries,
}) => {
  return countries.map((country) => {
    return (
      <Col
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={3}
        className="card-col"
        key={country.name}
      >
        <Card
          className="custom-card"
          onClick={(e) => {
            e.preventDefault();
            setCountry(`${country.name}`);
            setSelect(true);
          }}
        >
          <img
            alt={`${country.name} flag`}
            className="country-flags"
            src={country.flags.png}
          />
          <Container className="card-description">
            <h5 className={` ${light ? "light-theme" : "dark-theme"}`}>
              {country.name}
            </h5>
            <div>
              <h6 className={` ${light ? "light-theme" : "dark-theme"} `}>
                {" "}
                <span>Population:</span> {numberWithCommas(country.population)}{" "}
              </h6>
              <h6 className={` ${light ? "light-theme" : "dark-theme"} `}>
                {" "}
                <span>Region:</span> {country.region}
              </h6>
              <h6 className={` ${light ? "light-theme" : "dark-theme"} `}>
                {" "}
                <span>Capital:</span> {country.capital}
              </h6>
            </div>
          </Container>
        </Card>
      </Col>
    );
  });
};

export default RenderCards;
