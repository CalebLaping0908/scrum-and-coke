import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function BoardColumns() {
  const columnStyles = [
    { backgroundColor: "#f8f9fa" },
    { backgroundColor: "#e9ecef" },
    { backgroundColor: "#ced4da" },
  ];

  const colMargin = "15px";

  return (
    <Container>
      <Row>
        <Col xs={12} lg={4} style={columnStyles[0]}>
          Test Column 1
        </Col>
        <Col xs={12} lg={4} style={columnStyles[1]}>
          Test Column 2
        </Col>
        <Col xs={12} lg={4} style={columnStyles[2]}>
          Test Column 3
        </Col>
      </Row>
    </Container>
  );
}
