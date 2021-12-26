import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./OurMission.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faMicroscope } from "@fortawesome/free-solid-svg-icons";

const OurMission = () => {
  return (
    <div className="Mission-page ">
      <div xs={12} style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: 60,
            padding: 30,
          }}
        >
          The mission of quality & our core values.
        </h1>
        <h5 style={{ color: "black", fontWeight: 700 }}>
          Our mission it to improve the world’s health through compassionate and
          afforable care through innovation.
        </h5>
      </div>
      <Row xs={1} style={{ justifyContent: "center", marginTop: 70 }}>
        <Col xs={12} sm={6} md={3}>
          <div
            style={{
              border: "3px solid white",
              height: 140,
              backgroundColor: "#AEC3C0",
              borderRadius: 25,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
                width: "35%",
                height: 70,
                marginLeft: 20,
                borderRadius: "40%",
              }}
              icon={faSyringe}
            ></FontAwesomeIcon>
            <h2 style={{ marginLeft: 30 }}>Put the patient first</h2>
          </div>

          <div
            style={{
              border: "3px solid white",
              height: 140,
              backgroundColor: "#AEC3C0",
              borderRadius: 25,
              display: "flex",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
                width: "35%",
                height: 70,
                marginLeft: 20,
                borderRadius: "40%",
              }}
              icon={faWheelchair}
            ></FontAwesomeIcon>
            <h2 style={{ marginLeft: 30 }}>Be fast, but don't hurry</h2>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} style={{}}>
          <div
            style={{
              border: "3px solid white",
              height: 140,
              backgroundColor: "#AEC3C0",
              borderRadius: 25,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
                width: "35%",
                height: 70,
                marginLeft: 20,
                borderRadius: "40%",
              }}
              icon={faUserNurse}
            ></FontAwesomeIcon>
            <h2 style={{ marginLeft: 30 }}>Take personal ownership</h2>
          </div>
          <div
            style={{
              border: "3px solid white",
              height: 140,
              backgroundColor: "#AEC3C0",
              borderRadius: 25,
              display: "flex",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
                width: "35%",
                height: 70,
                marginLeft: 20,
                borderRadius: "40%",
              }}
              icon={faHeart}
            ></FontAwesomeIcon>
            <h2 style={{ marginLeft: 30 }}>Always work with integrity</h2>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div
            style={{
              border: "3px solid white",
              height: 140,
              backgroundColor: "#AEC3C0",
              borderRadius: 25,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
                width: "35%",
                height: 70,
                marginLeft: 20,
                borderRadius: "40%",
              }}
              icon={faStethoscope}
            ></FontAwesomeIcon>
            <h2 style={{ marginLeft: 30 }}>Be inquisitive and discover</h2>
          </div>

          <div
            style={{
              border: "3px solid white",
              height: 140,
              backgroundColor: "#AEC3C0",
              borderRadius: 25,
              display: "flex",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "black",
                width: "35%",
                height: 70,
                marginLeft: 20,
                borderRadius: "40%",
              }}
              icon={faMicroscope}
            ></FontAwesomeIcon>
            <h2 style={{ marginLeft: 30 }}>Be fast, but don't hurry</h2>
          </div>
        </Col>
      </Row>
      <Container xs={12} md={6} style={{ marginTop: 40 }}>
        <Button
          style={{
            height: 60,
            width: "300px",
            borderRadius: 25,
            marginLeft: 40,
            backgroundColor: "#ED4620",
          }}
        >
          Book an Appointment
        </Button>
        <Button
          style={{
            marginLeft: 40,
            height: 60,
            width: "300px",
            borderRadius: 25,
            backgroundColor: "#ED4620",
          }}
        >
          learn More
        </Button>
      </Container>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default OurMission;
