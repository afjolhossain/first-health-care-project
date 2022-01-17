import React, { useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import "./Login.css";
import login from "../../../image/doctor.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useLocation } from "react-router-dom";
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const {
    user,
    loginUser,
    isLoading,
    authError,
    signInGoogle,
    signInFacebook,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const hendleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    e.preventDefault();
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  return (
    <div className="login-page">
      <Row xs={1} md={2}>
        <Col xs={12} md={6}>
          <br />
          <Form
            onSubmit={handleLoginSubmit}
            style={{
              marginTop: 20,
              backgroundColor: "white",
              width: "75%",
              height: 600,
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
              name="email"
              onChange={hendleOnChange}
              required
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
              name="password"
              onChange={hendleOnChange}
              required
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
            <Link to="/register" style={{ textDecoration: "none" }}>
              <p style={{ textAlign: "center", marginTop: 15 }}>
                New to health-Care ? Create Profile
              </p>
            </Link>
            <div style={{ textAlign: "center" }}>
              ----------------OR-------------------
            </div>

            <div style={{ textAlign: "center" }}>
              <Button
                style={{
                  width: "30%",
                  textAlign: "start",
                }}
                onClick={signInGoogle}
              >
                <FaGooglePlusSquare style={{ width: 40 }}></FaGooglePlusSquare>
                Google
              </Button>

              <Button
                style={{
                  marginLeft: 25,
                  width: "30%",
                  textAlign: "start",
                }}
                onClick={signInFacebook}
              >
                <FaFacebookSquare style={{ width: 40 }}></FaFacebookSquare>
                Facebook
              </Button>
            </div>
          </Form>
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
              user logged SuccessFully
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
          <br />
        </Col>
        {isLoading && (
          <Spinner sx={12} md={6} animation="border" variant="primary" />
        )}

        <Col xs={12} md={6}>
          <img style={{ width: "100%", height: 550 }} src={login} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
