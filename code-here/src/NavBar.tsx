import React, { SetStateAction } from "react";
import { Navbar, Container, Button } from "react-bootstrap";

interface Navprops {
  light: boolean;
  setLight: React.Dispatch<SetStateAction<boolean>>;
}

const NavBar: React.FC<Navprops> = ({ light, setLight }) => {
  return (
    <Navbar
      sticky="top"
      bg={light ? "light" : "dark"}
      variant={light ? "light" : "dark"}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>Where in the world?</Navbar.Brand>
        <Button
          onClick={() => setLight(!light)}
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: `${light ? "#000" : "#fff"}`,
          }}
        >
          {light ? (
            <>
              <div
                style={{
                  marginRight: "8px",
                  display: "flex",
                  padding: "2px 4px",
                  gap: "6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mr-2"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
                <span>Dark mode</span>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  marginRight: "8px",
                  display: "flex",
                  padding: "2px 4px",
                  gap: "6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mr-2"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
                <span>Light mode</span>
              </div>
            </>
          )}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
