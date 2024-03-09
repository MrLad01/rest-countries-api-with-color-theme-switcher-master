import React, { SetStateAction } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import data from "../../data.json";
import { numberWithCommas } from "./helpers";

interface props {
  light: boolean;
  setSelect: React.Dispatch<SetStateAction<boolean>>;
  country: string;
}

const CountryPage: React.FC<props> = ({ light, setSelect, country }) => {
  const selectedCountry: any = data.find((nation) => nation.name === country);

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
          <Button
            className={` ${
              light ? "light-theme" : "dark-theme"
            } filter-dropdown back-button`}
            onClick={(e) => {
              e.preventDefault();
              setSelect(false);
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
            <span>Back </span>
          </Button>
          <div>
            {selectedCountry && (
              <>
                <div className=" float-md-start float-lg-start float-xl-start">
                  <Container>
                    <img
                      src={selectedCountry.flags.png}
                      alt={`${selectedCountry.name} flag`}
                      className="each-country-flags"
                    />
                  </Container>
                </div>
                <Row
                  className={` ${
                    light ? "light-theme" : "dark-theme"
                  } country-description `}
                >
                  <Container>
                    <h4
                      className={` ${
                        light ? "light-theme" : "dark-theme"
                      } country-header `}
                    >
                      {" "}
                      {selectedCountry.name}{" "}
                    </h4>
                    <div
                      className={` ${
                        light ? "light-theme" : "dark-theme"
                      } country-descriptions`}
                    >
                      <Col>
                        <div>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } `}
                          >
                            {" "}
                            <span>Native Name:</span>{" "}
                            {selectedCountry.nativeName}{" "}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } `}
                          >
                            {" "}
                            <span>Population:</span>{" "}
                            {numberWithCommas(selectedCountry.population)}{" "}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } `}
                          >
                            {" "}
                            <span>Region:</span> {selectedCountry.region}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } `}
                          >
                            {" "}
                            <span>Sub Region:</span> {selectedCountry.subregion}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } `}
                          >
                            {" "}
                            <span>Capital:</span> {selectedCountry.capital}
                          </h6>
                        </div>
                      </Col>
                      <Col>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } `}
                        >
                          {" "}
                          <span>Top Level Domain:</span>{" "}
                          {selectedCountry.topLevelDomain}
                        </h6>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } `}
                        >
                          {" "}
                          <span>Currencies:</span>{" "}
                          {selectedCountry.currencies?.map(
                            (curr: any) => curr.name
                          )}
                        </h6>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } `}
                        >
                          {" "}
                          <span>Languages:</span>{" "}
                          {selectedCountry.languages.map(
                            (lang: any) => lang.name
                          )}
                        </h6>
                      </Col>
                    </div>
                  </Container>
                  <Col className="country-borders">
                    {selectedCountry.borders?.length > 0 && (
                      <h6>Border Countries:</h6>
                    )}
                    <div className="borders">
                      {selectedCountry.borders?.length > 0 &&
                        selectedCountry.borders.map((border: string) => (
                          <div
                            className={` ${
                              light ? "light-theme" : "dark-theme-1"
                            } border `}
                          >
                            <span>{border}</span>
                          </div>
                        ))}
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default CountryPage;
