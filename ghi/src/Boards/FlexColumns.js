import React from "react";

import { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";

export default function TaskCard({ tasks, boardNumVar }) {
  const [taskStatus, setTaskStatus] = useState("");

  const handleTaskStatus = (event) => {
    const [newStatus, taskId] = event.target.value;
    // Call a function to update the task status with the new status and taskId
  };

  return (
    <Card>
      <Card.Header>{boardNumVar} Board</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Assignee</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks
              .filter(
                (task) => task.status == "Backlog" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.assignee}</td>
                    <td>
                      <select
                        onChange={handleTaskStatus}
                        defaultValue={task.status}
                        required
                        type="text"
                        name="taskStatus"
                        id="taskStatus"
                        className="form-select"
                        value={taskStatus}
                      >
                        <option value={["Backlog", task.id]}>Backlog</option>
                        <option value={["To Do", task.id]}>To Do</option>
                        <option value={["In Progress", task.id]}>
                          In Progress
                        </option>
                        <option value={["In Review / QA", task.id]}>
                          In Review / QA
                        </option>
                        <option value={["Completed", task.id]}>
                          Completed
                        </option>
                      </select>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
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
