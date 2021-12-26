import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, img, details } = service;
  return (
    <Col xs={12} sm={12} md={4} style={{ margin: "auto", padding: 40 }}>
      <Card
        style={{
          width: "23rem",
          textAlign: "center",
          borderRadius: 20,
        }}
      >
        <Card.Img variant="top" style={{ borderRadius: 20 }} src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Text style={{ textAlign: "start" }}>{details}</Card.Text>
          <Link to={`/booking/${id}`}>
            <Button style={{ backgroundColor: "#ED4620" }}>Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
