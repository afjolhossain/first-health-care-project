import React from "react";
import { Col, Row } from "react-bootstrap";
import afjol from "../../image/afjol.jpg";
import shahed from "../../image/sahed.jpg";
import "./Owners.css";

const Owners = () => {
  return (
    <div id="owner" className="Owner-page">
      <br />
      <Row xs={1} md={2} style={{ margin: "auto", textAlign: "center" }}>
        <Col xs={12} md={6}>
          <img src={afjol} alt="" style={{ width: 300, borderRadius: "5%" }} />
          <h3>AFJOL HOSSAIN</h3>
        </Col>
        <Col xs={12} md={6}>
          <img src={shahed} alt="" style={{ width: 350, borderRadius: "5%" }} />
          <h3>SHAHED AHMED</h3>
        </Col>
      </Row>
    </div>
  );
};

export default Owners;
