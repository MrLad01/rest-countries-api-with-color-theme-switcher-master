import React, { SetStateAction } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import data from "../../data.json";

interface props {
  light: boolean;
  setSelect: React.Dispatch<SetStateAction<boolean>>;
  country: string;
}

const CountryPage: React.FC<props> = ({ light, setSelect, country }) => {
  const selectedCountry: any = data.find((nation) => nation.name === country);
  console.log(selectedCountry);

  const numberWithCommas = (number: number) => {
    return number.toLocaleString();
  };

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
            onClick={(e) => {
              e.preventDefault();
              setSelect(false);
            }}
          >
            {" "}
            Back{" "}
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
                <Row className="country-description">
                  <Container>
                    <h4
                      className={` ${
                        light ? "light-theme" : "dark-theme"
                      } filter-dropdown`}
                    >
                      {" "}
                      {selectedCountry.name}{" "}
                    </h4>
                    <div className="country-description">
                      <Col
                      // xs={12} sm={6} md={8} lg={6} xl={6}
                      >
                        <div>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } filter-dropdown`}
                          >
                            {" "}
                            <span>Native Name:</span>{" "}
                            {selectedCountry.nativeName}{" "}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } filter-dropdown`}
                          >
                            {" "}
                            <span>Population:</span>{" "}
                            {numberWithCommas(selectedCountry.population)}{" "}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } filter-dropdown`}
                          >
                            {" "}
                            <span>Region:</span> {selectedCountry.region}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } filter-dropdown`}
                          >
                            {" "}
                            <span>Sub Region:</span> {selectedCountry.subregion}
                          </h6>
                          <h6
                            className={` ${
                              light ? "light-theme" : "dark-theme"
                            } filter-dropdown`}
                          >
                            {" "}
                            <span>Capital:</span> {selectedCountry.capital}
                          </h6>
                        </div>
                      </Col>
                      <Col
                      //  xs={12} sm={6} md={8} lg={8} xl={7}
                      >
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } filter-dropdown`}
                        >
                          {" "}
                          <span>Top Level Domain:</span>{" "}
                          {selectedCountry.topLevelDomain}
                        </h6>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } filter-dropdown`}
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
                          } filter-dropdown`}
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
                          <div className="border">
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
