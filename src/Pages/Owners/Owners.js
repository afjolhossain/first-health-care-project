import React from "react";
import { Col, Row } from "react-bootstrap";
import afjol from "../../image/afjol.jpg";
import shahed from "../../image/sahed.jpg";
import "./Owners.css";

const Owners = () => {
  return (
    <div id="owner" className="Owner-page">
      <br />
      <Row xs={1} md={2}>
        <Col
          xs={12}
          sm={12}
          md={6}
          style={{ textAlign: "center", color: "#8EA2A3" }}
        >
          <img src={afjol} alt="" style={{ width: 300, borderRadius: "5%" }} />
          <h3 style={{ color: "white" }}>AFJOL HOSSAIN</h3>
          <div style={{ margin: "auto", textAlign: "start", padding: 10 }}>
            <h5>
              Education : MBA from MetroPalitan University,Sylhet, BBA from
              Leading University,Sylhet.
            </h5>
            <h5>Multitasker || Coder || Mern Stack Developer ||</h5>
            <h5>
              Programming languages i know:JAVASCRIPT, Development
              technologies,framework and library:HTML,CSS,BOOSTRAP,TAILWIND,
              MATERIAL-UI,REACT,MONGODB,FIREBASE,NEXT.JS,EXPRESS. JS,NODE.JS
            </h5>
            <h5>
              Strong-Point:Problem-solving is the process of resolving
              challenging or complex problems. It includes the ability to find a
              solution to problems even under pressure.
            </h5>
            <h5>
              I mainly used JAVASCRIPT in my last position, so I don't have as
              much experience with c++.
            </h5>
            <h5>
              Future plan:Be a Web Developer was my childhood dream and I'm
              working on it.
            </h5>
            <h5>Favourite quote : "Life is a long lesson in humility."</h5>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
          <img src={shahed} alt="" style={{ width: 350, borderRadius: "5%" }} />
          <h3 style={{ color: "white" }}>SHAHED AHMED</h3>
          <div style={{ textAlign: "start", color: "#8EA2A3", padding: 10 }}>
            <h5>
              Education : Hon's in CSE(2nd year) Institution:Leading University
            </h5>
            <h5>
              Multitasker || Coder || Mern Stack Developer || Research
              Researcher ||
            </h5>
            <h5>
              Programming languages i know:C,C++,JAVA,JAVASCRIPT, Development
              technologies,framework and library:HTML,CSS,BOOSTRAP,TAILWIND,
              MATERIAL-UI,REACT,MONGODB,FIREBASE,NEXT.JS,EXPRESS. JS,NODE.JS
            </h5>
            <h5>Strong point in my field:Data structure and Algorithm.</h5>
            <h5>
              Weak point :Very few experiences in competitive programming
              (CP).Try to strong in this field also.
            </h5>
            <h5>
              Future plan: Be a software Engineer was my childhood dream and I'm
              working on it.
            </h5>
            <h5>
              Favourite quote :"What i know is a drop, what i don’t know is an
              Ocean".
            </h5>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Owners;
