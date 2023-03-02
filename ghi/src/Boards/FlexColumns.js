import React from "react";

import { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";

export default function TaskCard({ task, handleTaskStatus }) {
  const { id, title, description, assignee, status } = task;

  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Assignee: {assignee}</Card.Text>
        <Card.Text>Status:</Card.Text>
        <select
          onChange={(e) => handleTaskStatus(e, id)}
          defaultValue={status}
          required
          type="text"
          name="taskStatus"
          id="taskStatus"
          className="form-select"
        >
          <option value="Backlog">Backlog</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="In Review / QA">In Review / QA</option>
          <option value="Completed">Completed</option>
        </select>
      </Card.Body>
    </Card>
  );
}

//   const columnStyles = [
//     { backgroundColor: "#f8f9fa" },
//     { backgroundColor: "#e9ecef" },
//     { backgroundColor: "#ced4da" },
//   ];
//   const colMargin = "15px";
//   return (
//     <Container>
//       <Row>
//         <Col xs={12} lg={4} style={columnStyles[0]}>
//           Test Column 1
//         </Col>
//         <Col xs={12} lg={4} style={columnStyles[1]}>
//           Test Column 2
//         </Col>
//         <Col xs={12} lg={4} style={columnStyles[2]}>
//           Test Column 3
//         </Col>
//       </Row>
//     </Container>
//   );
