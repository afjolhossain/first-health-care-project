import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data.service));
  }, []);
  return (
    <div id="home">
      <h1
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: 50,
          fontWeight: 700,
          color: "#1c375c",
        }}
      >
        Our Services
      </h1>
      <h5
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 30,
          fontWeight: 700,
          color: "#1c375c",
          padding: 30,
        }}
      >
        We provide primary care when you need it, get personalized and high
        quality healthcare by talking to top medical doctors
      </h5>
      <Row sx={1} sm={6} md={4}>
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
