import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Login.css";
import login from "../../../image/doctor.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <Row xs={1} md={2}>
        <Col xs={12} md={6}>
          <br />
          <Form
            style={{
              backgroundColor: "white",
              width: "75%",
              height: 500,
              margin: "auto",
              justifyItems: "center",
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
              Sign In
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
            <Link to="/register" style={{ textDecoration: "none" }}>
              <p style={{ textAlign: "center", marginTop: 15 }}>
                New to health-Care ? Create Profile
              </p>
            </Link>
          </Form>
        </Col>
        <Col xs={12} md={6}>
          <img style={{ width: "100%", height: 500 }} src={login} alt="" />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Login;
