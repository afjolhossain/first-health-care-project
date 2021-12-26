import React, { useState } from "react";

import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import "./register.css";
import login from "../../../image/background2.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { user, registerUser, isLoading, authError } = useAuth();

  const hendleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };

  const handleLoginSubmit = (e) => {
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <div className="login-page">
      <Row sx={1} md={2}>
        <Col sx={12} sm={12} md={6} style={{ justifyContent: "center" }}>
          {!isLoading && (
            <Form
              onSubmit={handleLoginSubmit}
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
                type="text"
                name="name"
                onBlur={hendleOnBlur}
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
                name="email"
                onBlur={hendleOnBlur}
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
                name="password"
                onBlur={hendleOnBlur}
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
                type="submit"
              >
                Continue
              </Button>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <p style={{ textAlign: "center", marginTop: 15 }}>
                  Already have an account ? Sign in
                </p>
              </Link>
            </Form>
          )}
          {user?.email && (
            <Alert
              style={{
                margin: "auto",
                width: "50%",
                borderRadius: 10,
                marginTop: 10,
              }}
              variant="success"
            >
              user created SuccessFully
            </Alert>
          )}
          {authError && (
            <Alert
              style={{
                margin: "auto",
                width: "60%",
                borderRadius: 10,
                marginTop: 10,
              }}
              variant="danger"
            >
              {authError}
            </Alert>
          )}
        </Col>
        {isLoading && (
          <Spinner sx={12} md={6} animation="border" variant="primary" />
        )}
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
