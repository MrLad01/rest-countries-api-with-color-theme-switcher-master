import { Container, Row, Col, Button } from "react-bootstrap";
// import data from "../../../data.json";
import { numberWithCommas } from "../Helpers/helpers";
import React, { SetStateAction } from "react";

// the props of the page
interface props {
  data: any[];
  country: string; // the name of the selected country
  light: boolean; // for the light and dark mode
  setSelect: React.Dispatch<SetStateAction<boolean>>;
}

const CountryPage: React.FC<props> = ({ data, light, setSelect, country }) => {
  const selectedCountry: any = data.find(
    (nation) => nation.name.official === country
  ); // for getting the data of the selected country

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
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                      alt={`${selectedCountry.name} flag`}
                      className="each-country-flags"
                      src={selectedCountry.flags.png}
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
                      {selectedCountry.name.common}{" "}
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
                            <span>Official Name:</span>{" "}
                            {selectedCountry.name.official}{" "}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } `}
                          >
                            {" "}
                            <span>Native Name:</span>{" "}
                            {Object.values(selectedCountry.name.nativeName).map(
                              (language: any) => (
                                <>
                                  <span
                                    style={{
                                      marginRight: "10px",
                                    }}
                                  >
                                    {language.common}
                                  </span>
                                </>
                              )
                            )}
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
                          <span>Top Level Domain:</span> {selectedCountry.tld}
                        </h6>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } `}
                        >
                          {" "}
                          <span>Currencies:</span>{" "}
                          {Object.values(selectedCountry.currencies).map(
                            (curr: any) => (
                              <span
                                style={{
                                  marginRight: "10px",
                                }}
                              >
                                {`${curr.name} (${curr.symbol})`}
                              </span>
                            )
                          )}
                        </h6>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } `}
                        >
                          {" "}
                          <span>Languages:</span>{" "}
                          {Object.values(selectedCountry.languages)}
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
