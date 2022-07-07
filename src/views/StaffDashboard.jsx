import React from "react";

import { Button, Col, Row, Container } from "reactstrap";

const StaffDashboard = (props) => {
  return (
    <>
      <Container className="mt-5" fluid>
        <center>
          <h1> Research Management </h1>{" "}
        </center>
        <div
          style={{
            minHeight: "500px",
            minWidth: "100px",
            backgroundImage:
              "url(" + require("../assets/img/dashboard.png") + ")",
            // backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </Container>
    </>
  );
};

export default StaffDashboard;
