import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Medicine from "../../Medicine/Medicine";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setMedicines(data.medicine));
  }, []);
  return (
    <div id="medicine">
      <h1
        style={{
          textAlign: "center",
          color: "#1c375c",
          marginTop: 30,
          fontSize: 60,
          fontWeight: 700,
        }}
      >
        We Provide Online Medicine
      </h1>
      <Row xs={1} md={3}>
        {medicines.map((medicine) => (
          <Medicine medicine={medicine}></Medicine>
        ))}
      </Row>
    </div>
  );
};

export default Medicines;
