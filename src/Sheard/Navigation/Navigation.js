import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import logo from "../../logo/logo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Pages/Hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const { user, LogOut } = useAuth();
  return (
    <div>
      <Navbar
        className="navigation"
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex ">
            <img style={{ height: 40, marginRight: 100 }} src={logo} alt="" />
            <h4 style={{ color: "#1c375c" }}> Health-Care-Center</h4>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              as={HashLink}
              to="/home#home"
              style={{ color: "#1c375c", fontSize: 20, fontWeight: 700 }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="/home#service"
              style={{ color: "#1c375c", fontSize: 20, fontWeight: 700 }}
            >
              Service
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="/home#medicine"
              style={{ color: "#1c375c", fontSize: 20, fontWeight: 700 }}
            >
              Medicine
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="owner"
              style={{ color: "#1c375c", fontSize: 20, fontWeight: 700 }}
            >
              Owners
            </Nav.Link>
            {/* <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text> */}
            {user?.email ? (
              <Button onClick={LogOut}>logout</Button>
            ) : (
              <Link to="login">
                <FontAwesomeIcon
                  style={{
                    color: "#ED5A23",
                    marginLeft: 20,
                    height: 30,
                  }}
                  icon={faUser}
                ></FontAwesomeIcon>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
