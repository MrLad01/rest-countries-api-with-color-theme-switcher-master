import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
// import { Form } from "react-router-dom";

const AllCountries: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Container className="d-flex justify-content-between">
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
      </Container>
    </>
  );
};

export default AllCountries;
