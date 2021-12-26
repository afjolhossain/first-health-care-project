import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
import logo from "../../logo/logo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
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
            <h4> Navbar</h4>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/home#home">Home</Nav.Link>
            <Nav.Link href="/home#service">Service</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text> */}
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
