import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Medicine = ({ medicine }) => {
  const { id, name, img } = medicine;
  return (
    <div xs={12} sm={12} md={4}>
      <br />
      <Card
        style={{
          width: "20rem",
          textAlign: "center",
          margin: "auto",
          borderRadius: 20,
          backgroundColor: "#1c375c ",
        }}
      >
        <Card.Img
          variant="top"
          style={{ height: 200, borderRadius: 20 }}
          src={img}
        />
        <Card.Body
          style={{
            borderRadius: 15,
            marginBottom: 30,
          }}
        >
          <Card.Title style={{ color: "white" }}>{name}</Card.Title>
          <Link to={`/booking/${id}`}>
            <Button
              style={{
                color: "white",
                backgroundColor: "#AC1835 ",
                borderRadius: 20,
                width: "250px",
                marginTop: 10,
              }}
            >
              Order Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <br />
      <br />
    </div>
  );
};

export default Medicine;
