import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TopNav() {
  return (
    <Container fluid>
      <Row className="align-items-center bg-primary fixed-top">
        <Col xs={6} md={8}>
          <h1>MongoDB Table</h1>
        </Col>
        <Col xs={6} md={4} className="text-right">
          <p>{new Date().toLocaleString()}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TopNav;
