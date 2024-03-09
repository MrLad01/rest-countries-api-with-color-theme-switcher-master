import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
  Alert,
} from "react-bootstrap";
import data from "../../data.json";
import { searchFunction, filterFunction, toCamelCase } from "./helpers";
import RenderCards from "./Card";

interface props {
  light: boolean;
  setSelect: React.Dispatch<SetStateAction<boolean>>;
  setCountry: React.Dispatch<SetStateAction<string>>;
}

const AllCountries: React.FC<props> = ({ light, setSelect, setCountry }) => {
  const [allCountries, setAllCountries] = useState<any[]>([]);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [filterKey, setFilterKey] = useState<string>("");
  const keys = ["name", "region", "capital"];
  const continents = ["africa", "america", "asia", "europe", "oceania"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const trimmedQuery = String(e.target.value).trim();
    setSearchActive(trimmedQuery !== "");
    setQuery(trimmedQuery);
    setFilterActive(false);
  };

  const searched = searchFunction(data, keys, query);
  const filtered = filterFunction(data, "region", filterKey);

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
          <Container className="all-search-filter">
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
                {filterActive ? toCamelCase(filterKey) : "Filter by region"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {continents.map((continent) => (
                  <Dropdown.Item
                    onClick={() => {
                      setFilterActive(true);
                      setFilterKey(`${continent}`);
                    }}
                  >
                    {toCamelCase(continent)}
                  </Dropdown.Item>
                ))}
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
          {searchActive ? (
            searched.length === 0 ? (
              <RenderCards
                setSelect={setSelect}
                setCountry={setCountry}
                light={light}
                countries={allCountries}
              />
            ) : (
              <RenderCards
                setSelect={setSelect}
                setCountry={setCountry}
                light={light}
                countries={searched}
              />
            )
          ) : <RenderCards
              setSelect={setSelect}
              setCountry={setCountry}
              light={light}
              countries={allCountries}
            /> ? (
            filterActive ? (
              <RenderCards
                setSelect={setSelect}
                setCountry={setCountry}
                light={light}
                countries={filtered}
              />
            ) : (
              <RenderCards
                setSelect={setSelect}
                setCountry={setCountry}
                light={light}
                countries={allCountries}
              />
            )
          ) : (
            <RenderCards
              setSelect={setSelect}
              setCountry={setCountry}
              light={light}
              countries={allCountries}
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default AllCountries;
