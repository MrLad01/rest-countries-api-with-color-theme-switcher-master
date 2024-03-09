import { Card, Col, Container } from "react-bootstrap";
import { numberWithCommas } from "../Helpers/helpers";
import React, { SetStateAction } from "react";

interface props {
  setSelect: React.Dispatch<SetStateAction<boolean>>;
  setCountry: React.Dispatch<SetStateAction<string>>;
  light: boolean;
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
        key={country.name}
        className="card-col"
      >
        <Card
          className="custom-card"
          onClick={(e) => {
            e.preventDefault();
            setSelect(true);
            setCountry(`${country.name}`);
          }}
        >
          <img
            src={country.flags.png}
            alt={`${country.name} flag`}
            className="country-flags"
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
