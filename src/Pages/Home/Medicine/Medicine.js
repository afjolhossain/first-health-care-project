import React from "react";
import { Button, Card } from "react-bootstrap";

const Medicine = ({ medicine }) => {
  const { name, img } = medicine;
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default Medicine;
