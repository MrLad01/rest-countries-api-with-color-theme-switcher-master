import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import data from "../../data.json";

interface props {
  light: boolean;
}

const AllCountries: React.FC<props> = ({ light }) => {
  const [allCountries, setAllCountries] = useState<any[]>([]);
  const numberWithCommas = (number: number) => {
    return number.toLocaleString();
  };

  useEffect(() => {
    setAllCountries(data);
  }, []);

  return (
    <>
      <div
        className={`all-countries-container ${
          light ? "light-theme" : "dark-theme"
        }`}
        // data-bs-theme={light ? "light" : "dark"}
        style={{
          color: `${light ? "#000" : "#fff"}`,
        }}
      >
        <Container
        // variant={light ? "light" : "dark"}
        >
          <Row>
            <Container className="d-flex justify-content-between all-search-filter">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search for countries..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className={` ${
                    light ? "light-theme" : "dark-theme"
                  } filter-dropdown`}
                >
                  Filter by region
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">America</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Europe</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Oceania</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Row>
          <Row g={6} className="card-row">
            {allCountries.map((country) => (
              <>
                <Col xs={12} sm={6} md={6} lg={4} xl={3} className="card-col">
                  <Card className="custom-card">
                    <img
                      src={country.flags.png}
                      alt={`${country.name} flag`}
                      className="country-flags"
                    />
                    <Container className="card-description">
                      <h5
                        className={` ${
                          light ? "light-theme" : "dark-theme"
                        } filter-dropdown`}
                      >
                        {" "}
                        {country.name}{" "}
                      </h5>
                      <div>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } filter-dropdown`}
                        >
                          {" "}
                          <span>Population:</span>{" "}
                          {numberWithCommas(country.population)}{" "}
                        </h6>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } filter-dropdown`}
                        >
                          {" "}
                          <span>Region:</span> {country.region}
                        </h6>
                        <h6
                          className={` ${
                            light ? "light-theme" : "dark-theme"
                          } filter-dropdown`}
                        >
                          {" "}
                          <span>Capital:</span> {country.capital}
                        </h6>
                      </div>
                    </Container>
                  </Card>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AllCountries;
