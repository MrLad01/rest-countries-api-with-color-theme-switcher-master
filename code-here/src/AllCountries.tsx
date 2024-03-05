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

const AllCountries: React.FC = () => {
  const [allCountries, setAllCountries] = useState<any[]>([]);
  const numberWithCommas = (number: number) => {
    return number.toLocaleString();
  };

  useEffect(() => {
    setAllCountries(data);
  }, []);

  return (
    <>
      <Container className="all-countries-container">
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
              <Dropdown.Toggle id="dropdown-basic">
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
        <Row>
          {allCountries.map((country) => (
            <>
              <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                <Card>
                  <img
                    src={country.flags.png}
                    alt={`${country.name} flag`}
                    className="country-flags"
                  />
                  <h2> {country.name} </h2>
                  <Container>
                    <h3>
                      {" "}
                      <span>Population:</span>{" "}
                      {numberWithCommas(country.population)}{" "}
                    </h3>
                    <h3>
                      {" "}
                      <span>Region:</span> {country.region}
                    </h3>
                    <h3>
                      {" "}
                      <span>Capital:</span> {country.capital}
                    </h3>
                  </Container>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllCountries;
