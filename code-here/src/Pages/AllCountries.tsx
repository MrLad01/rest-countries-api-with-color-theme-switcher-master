import {
  Alert,
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import data from "../../../data.json";
import {
  filterFunction,
  searchFunction,
  toCamelCase,
} from "../Helpers/helpers";
import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import RenderCards from "../Components/Card";

// the props of the page
interface props {
  light: boolean; // for the light and dark mode
  setCountry: React.Dispatch<SetStateAction<string>>; // for storing the name of the selected country
  setSelect: React.Dispatch<SetStateAction<boolean>>; // for checking if a card is selected or not
}

const AllCountries: React.FC<props> = ({ light, setSelect, setCountry }) => {
  const [allCountries, setAllCountries] = useState<any[]>([]); // an array for all the countries
  const continents = ["africa", "america", "asia", "europe", "oceania"];
  const [filterActive, setFilterActive] = useState<boolean>(false); // to inspect if the filter dropdown is interacted with
  const [filterKey, setFilterKey] = useState<string>(""); // for the selected option in the filter dropdown
  const keys = ["name", "region", "capital"]; // the keys for the search function
  const [searchActive, setSearchActive] = useState<boolean>(false); // to inspect if the search input is interacted with
  const [show, setShow] = useState<boolean>(false); // for displaying an error message if there is an incorrect query
  const [query, setQuery] = useState<string>(""); // for the value in the search input

  // function the input as it is being updated
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); // remove any default activity on the input
    const trimmedQuery = String(e.target.value).toLowerCase().trim(); // for the value in the input, removing any existing whitespace
    setFilterActive(false); // disabling the filtered data
    setSearchActive(trimmedQuery !== ""); // saying that the search is active
    setQuery(trimmedQuery); // setting the query, the value inputted in the search input
  };

  const searched = searchFunction(data, keys, query);
  const filtered = filterFunction(data, "region", filterKey);

  useEffect(() => {
    setAllCountries(data); // for storing the data of all the countries
  }, []);

  useEffect(() => {
    if (searchActive && searched.length === 0) {
      setShow(true); // for showing the error message when the search result is not found
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
            {/* for the search form */}
            <Form className="d-flex">
              <div className=" search-form">
                <FormControl
                  aria-label="Search"
                  className="search"
                  onChange={handleChange}
                  placeholder="Search for countries..."
                  type="search"
                />
                <Button className="search-button">
                  <svg
                    className="w-6 h-6 search-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </Form>
            {/* for the filter dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                className={`${
                  light ? "light-theme" : "dark-theme"
                } filter-dropdown`}
                id="dropdown-basic"
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
        {/* the error message displaying at the top of the page */}
        {show && (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              {`What are you typing because there is actually no country matching "${query}". Please try a different search.`}
            </p>
          </Alert>
        )}
        {/* for the cards of the countries */}
        <Row g={6} className="card-row">
          {searchActive ? (
            searched.length === 0 ? (
              <RenderCards
                countries={allCountries}
                light={light}
                setCountry={setCountry}
                setSelect={setSelect}
              />
            ) : (
              <RenderCards
                countries={searched}
                light={light}
                setCountry={setCountry}
                setSelect={setSelect}
              />
            )
          ) : <RenderCards
              countries={allCountries}
              light={light}
              setCountry={setCountry}
              setSelect={setSelect}
            /> ? (
            filterActive ? (
              <RenderCards
                countries={filtered}
                light={light}
                setCountry={setCountry}
                setSelect={setSelect}
              />
            ) : (
              <RenderCards
                countries={allCountries}
                light={light}
                setCountry={setCountry}
                setSelect={setSelect}
              />
            )
          ) : (
            <RenderCards
              countries={allCountries}
              light={light}
              setCountry={setCountry}
              setSelect={setSelect}
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default AllCountries;
