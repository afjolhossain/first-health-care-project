import React from "react";
import "./Banner.css";
import { Col, Row } from "react-bootstrap";
import banner from "../../../image/Background.png";

const Banner = () => {
  return (
    <div className="bg-Color mt-40 ">
      <Row xs={1} md={2}>
        <Col sx={12} md={6} style={{ textAlign: "center", margin: "auto" }}>
          <h1 className="font-color" style={{ fontSize: 80, padding: 30 }}>
            Doctors who treat with care.
          </h1>
          <p style={{ fontSize: 20 }}>
            Our skilled sopctors have tremendous experience uith wide range of
            diseases to servr the needs of our patients
          </p>
          <div style={{ marginTop: 30 }}>
            <button className="Appoinment-btn">Book an Appointment</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </Col>
        <Col sx={12} md={6}>
          <img style={{ width: "100%", height: 500 }} src={banner} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
