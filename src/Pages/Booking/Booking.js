import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();
  return (
    <div
      style={{
        height: 400,
        textAlign: "center",
        marginTop: 60,
        color: "#1c375c",
      }}
    >
      <h1>please booking:{serviceId}</h1>
      <h1>We are Extremely sorry</h1>
      <h1>product is not avaiable here,"please try again"</h1>
    </div>
  );
};

export default Booking;
