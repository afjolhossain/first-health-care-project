import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const WorkingHours = () => {
  return (
    <Row style={{ height: 500, backgroundColor: "#182D70" }}>
      <Col
        xs={12}
        md={6}
        style={{ margin: "auto", padding: "20", width: "40%" }}
      >
        <br />
        <h1 style={{ color: "white" }}>
          S
          <FontAwesomeIcon
            style={{ color: "#ED5A23" }}
            icon={faClock}
          ></FontAwesomeIcon>
          Working Hours
        </h1>
        <h5 style={{ marginTop: 20, color: "#5065A9" }}>
          Please check below for our working hours throughout the week excluding
          national holidays.
        </h5>
        <div
          className="d-flex justify-content-between text-white"
          style={{ marginTop: 30 }}
        >
          <div>
            <h5>Monday — Friday</h5>
            <h5>Saturday — Sunday</h5>
          </div>
          <div>
            <h5>9:00AM — 10:00PM</h5>
            <h5>10:00AM — 9:00PM</h5>
          </div>
        </div>
      </Col>
      <Col
        xs={12}
        md={6}
        style={{ margin: "auto", padding: "20", width: "40%" }}
      >
        <h1 className="text-white">
          <FontAwesomeIcon
            icon={faHeartbeat}
            style={{ color: "#ED5A23" }}
          ></FontAwesomeIcon>
          Doctors availability
        </h1>
        <br />
        <h5 style={{ color: "#A2B4EE" }}>
          Our doctors are available most of the week and if not you can always
          book appointment with other available doctors on our panel of expert
          doctors.
        </h5>
        <br />
        <Button
          style={{
            height: 50,
            width: "170px",
            borderRadius: 20,
            backgroundColor: "#BB3714",
          }}
        >
          Meet Our Doctors
        </Button>
      </Col>
    </Row>
  );
};

export default WorkingHours;
