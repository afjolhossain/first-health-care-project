import React from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import "./register.css";
import login from "../../../image/background2.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-page">
      <Row sx={1} md={2}>
        <Col sx={12} sm={12} md={6}>
          <Form
            style={{
              backgroundColor: "white",
              width: "75%",
              height: 550,
              margin: "auto",
              justifyItems: "center",
              marginTop: 80,
              borderRadius: 40,
            }}
          >
            <br />
            <h2
              style={{
                color: "#1c375c",
                fontWeight: 700,
                textAlign: "center",
                marginTop: 35,
              }}
            >
              Create Profile
            </h2>
            <h5
              style={{
                color: "#1c375c",
                fontWeight: 700,
                textAlign: "center",
                marginTop: 15,
              }}
            >
              Sign in to your account below
            </h5>
            <Form.Label
              htmlFor="inputPassword5"
              style={{
                marginLeft: 70,
                color: "#1c375c",
                fontWeight: 700,
              }}
            >
              Your name
            </Form.Label>
            <Form.Control
              style={{
                width: "75%",
                margin: "auto",
                height: 60,
                borderRadius: 30,
                border: "3px solid rgb(137, 160, 179)",
              }}
              type="email"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Name"
            />
            <Form.Label
              htmlFor="inputPassword5"
              style={{
                marginLeft: 70,
                color: "#1c375c",
                fontWeight: 700,
              }}
            >
              Email
            </Form.Label>
            <Form.Control
              style={{
                width: "75%",
                margin: "auto",
                height: 60,
                borderRadius: 30,
                border: "3px solid rgb(137, 160, 179)",
              }}
              type="email"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Example@gmail.com"
            />
            <Form.Label
              htmlFor="inputPassword5"
              style={{
                marginLeft: 70,
                color: "#1c375c",
                fontWeight: 700,
              }}
            >
              Password
            </Form.Label>
            <Form.Control
              style={{
                width: "75%",
                margin: "auto",
                height: 60,
                borderRadius: 30,
                border: "3px solid rgb(137, 160, 179)",
              }}
              type="Password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder=""
            />

            <Button
              className="Login-more-btn"
              style={{
                width: "75%",
                marginTop: 20,
                marginLeft: 60,
                height: 60,
                borderRadius: 30,
                border: "3px solid rgb(137, 160, 179)",
                color: "white",
                fontWeight: 700,
              }}
            >
              Continue
            </Button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p style={{ textAlign: "center", marginTop: 15 }}>
                Already have an account ? Sign in
              </p>
            </Link>
          </Form>
        </Col>
        <Col sx={12} sm={12} md={6}>
          <img
            style={{ width: "100%", height: 500, zoom: 1.4 }}
            src={login}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
