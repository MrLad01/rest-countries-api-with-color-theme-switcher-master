import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import data from "../../data.json";

interface props {
  light: boolean;
  setSelect: React.Dispatch<SetStateAction<boolean>>;
  setCountry: React.Dispatch<SetStateAction<string>>;
}

export function searchFunction(
  data: any[],
  keys: string[],
  query: string
): any[] {
  return data.filter((item) =>
    keys.some((key) => {
      const value = item[key];
      if (value && typeof value === "string") {
        return value.toLowerCase().includes(query);
      }
      return false;
    })
  );
}

export function filterFunction(data: any[], key: string, query: string): any[] {
  return data.filter((item) => {
    const value = item[key];
    if (value && typeof value === "string") {
      return value.toLowerCase().includes(query);
    }
    return false;
  });
}

const AllCountries: React.FC<props> = ({ light, setSelect, setCountry }) => {
  const [allCountries, setAllCountries] = useState<any[]>([]);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [filterKey, setFilterKey] = useState<string>("");
  const keys = ["name", "region", "capital"];
  const numberWithCommas = (number: number) => {
    return number.toLocaleString();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const trimmedQuery = String(e.target.value).trim();
    setSearchActive(trimmedQuery !== "");
    setQuery(trimmedQuery);
  };

  const searched = searchFunction(data, keys, query);
  const filtered = filterFunction(data, "region", filterKey);

  const renderCards = (countries: any[]) => {
    return countries.map((country) => (
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
            <h5
              className={` ${
                light ? "light-theme" : "dark-theme"
              } filter-dropdown`}
            >
              {country.name}
            </h5>
            <div>
              <h6
                className={` ${
                  light ? "light-theme" : "dark-theme"
                } filter-dropdown`}
              >
                {" "}
                <span>Population:</span> {numberWithCommas(country.population)}{" "}
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
    ));
  };

  useEffect(() => {
    setAllCountries(data);
  }, []);

  useEffect(() => {
    if (searchActive && searched.length === 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [searched, searchActive]);

  return (
    <div
      className={`all-countries-container ${
        light ? "light-theme" : "dark-theme"
      }`}
    >
      <Container>
        <Row>
          <Container className="d-flex justify-content-between all-search-filter">
            <Form className="d-flex">
              <div className=" search-form">
                <FormControl
                  type="search"
                  placeholder="Search for countries..."
                  className="search"
                  aria-label="Search"
                  onChange={handleChange}
                />
                <Button className="search-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 search-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </Button>
              </div>
            </Form>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className={`${
                  light ? "light-theme" : "dark-theme"
                } filter-dropdown`}
              >
                Filter by region
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setFilterActive(true);
                    setFilterKey("africa");
                  }}
                >
                  Africa
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterActive(true);
                    setFilterKey("america");
                  }}
                >
                  America
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterActive(true);
                    setFilterKey("asia");
                  }}
                >
                  Asia
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterActive(true);
                    setFilterKey("europe");
                    console.log("hello");
                  }}
                >
                  Europe
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setFilterActive(true);
                    setFilterKey("oceania");
                  }}
                >
                  Oceania
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Row>
        {show && (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              {`What are you typing because there is actually no country matching "${query}". Please try a different search.`}
            </p>
          </Alert>
        )}
        <Row g={6} className="card-row">
          {searchActive
            ? searched.length === 0
              ? renderCards(allCountries)
              : renderCards(allCountries)
            : renderCards(searched)
            ? filterActive
              ? renderCards(filtered)
              : renderCards(allCountries)
            : renderCards(allCountries)}
        </Row>
      </Container>
    </div>
  );
};

export default AllCountries;
