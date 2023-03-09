import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container, Badge, Button } from "react-bootstrap";
import { useToken } from "../Auth";
import { useNavigate, useParams } from "react-router-dom";

export default function BoardDetail({
  tasks,
  getTasks,
  boards,
  getBoards,
  users,
}) {
  const { id } = useParams();
  const [taskStatus, setTaskStatus] = useState("");
  const [boardNumVar, setBoardNumVar] = useState(id);
  const [token] = useToken();
  const navigate = useNavigate();

  if (!token) {
    console.log("token", token);
    navigate("/users/login");
  }

  const updateTask = async (id, status) => {
    const data = {};
    data.status = taskStatus;

    const taskUrl = `http://localhost:8080/tasks/${id}/`;
    const fetchConfig = {
      method: "PATCH",
      body: JSON.stringify({ status: status }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(taskUrl, fetchConfig);
    if (response.ok) {
      const task = await response.json();
      console.log(task);
      setTaskStatus("");
      getTasks();
    }
  };

  if (tasks === undefined) {
    return null;
  }

  const handleTaskStatus = async (event) => {
    let statusString = event.target.value;
    let statusArray = statusString.split(",");
    const status = statusArray[0];
    const id = statusArray[1];
    updateTask(id, status);
  };

  const handleBoardNumVarChange = async (event) => {
    const value = event.target.value;
    setBoardNumVar(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBoardNumVar("");
    getBoards();
  };
  return (
    <>
      <Container className="BoardContainer">
        <Row className="BoardDropDownMenu">
          <form
            onSubmit={handleSubmit}
            className="select-board-form"
            id="select-board-form"
          >
            <div className="mb-3">
              <div className="select-board">
                <select
                  onChange={handleBoardNumVarChange}
                  placeholder="Board"
                  required
                  type="text"
                  name="boardNumVar"
                  id="boardNumVar"
                  className="board custom-select"
                  value={boardNumVar}
                >
                  <option>Board</option>
                  {boards.map((board) => {
                    return (
                      <option key={board.id} value={board.id}>
                        {board.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </form>
        </Row>
        <Link to="/tasks/new">
          <Button
            className="CreateTaskButton"
            variant="outline-light"
            size="lg"
          >
            Create Task
          </Button>
        </Link>
        <Row className="row d-flex flex-row justify-content-between align-items-start">
          <Col className="col d-flex flex-column align-items-center">
            <h2 className="Header">Backlog</h2>
            {tasks
              .filter(
                // eslint-disable-next-line eqeqeq
                (task) => task.status == "Backlog" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div
                    className="CardDiv"
                    style={{ width: "100%" }}
                    key={task.id}
                  >
                    <Card
                      className="Card mb-3 flex-fill"
                      style={{ flexBasis: 0 }}
                    >
                      <Card.Body>
                        <Card.Header className="CardHead">
                          <Link className="TitleLink" to={`/tasks/${task.id}`}>
                            {task.title}
                          </Link>
                        </Card.Header>

                        <Badge pill bg="info" className="BadgeAssignee">
                          {users
                            .filter(
                              (user) => task.assignee === user.employee_number
                            )
                            .map((user) => user.full_name)}
                        </Badge>
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
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h2 className="Header">To Do</h2>
            {tasks
              .filter(
                // eslint-disable-next-line eqeqeq
                (task) => task.status == "To Do" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div
                    className="CardDiv"
                    style={{ width: "100%" }}
                    key={task.id}
                  >
                    <Card className="Card mb-3">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          <Link className="TitleLink" to={`/tasks/${task.id}`}>
                            {task.title}
                          </Link>
                        </Card.Header>
                        <Badge pill bg="info" className="BadgeAssignee">
                          {users
                            .filter(
                              (user) => task.assignee === user.employee_number
                            )
                            .map((user) => user.full_name)}
                        </Badge>
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
                          <option value={["To Do", task.id]}>To Do</option>
                          <option value={["Backlog", task.id]}>Backlog</option>
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
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h2 className="Header">In Progress</h2>
            {tasks
              .filter(
                (task) =>
                  // eslint-disable-next-line eqeqeq
                  task.status == "In Progress" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div
                    className="CardDiv"
                    style={{ width: "100%" }}
                    key={task.id}
                  >
                    <Card className="Card mb-3 flex-grow-1">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          <Link className="TitleLink" to={`/tasks/${task.id}`}>
                            {task.title}
                          </Link>
                        </Card.Header>

                        <Badge pill bg="info" className="BadgeAssignee">
                          {users
                            .filter(
                              (user) => task.assignee === user.employee_number
                            )
                            .map((user) => user.full_name)}
                        </Badge>
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
                          <option value={["In Progress", task.id]}>
                            In Progress
                          </option>
                          <option value={["To Do", task.id]}>To Do</option>
                          <option value={["Backlog", task.id]}>Backlog</option>
                          <option value={["In Review / QA", task.id]}>
                            In Review / QA
                          </option>
                          <option value={["Completed", task.id]}>
                            Completed
                          </option>
                        </select>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h2 className="Header">In Review / QA</h2>
            {tasks
              .filter(
                (task) =>
                  // eslint-disable-next-line eqeqeq
                  task.status == "In Review / QA" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div
                    className="CardDiv"
                    style={{ width: "100%" }}
                    key={task.id}
                  >
                    <Card className="Card mb-3 flex-grow-1">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          <Link className="TitleLink" to={`/tasks/${task.id}`}>
                            {task.title}
                          </Link>
                        </Card.Header>
                        <Badge pill bg="info" className="BadgeAssignee">
                          {users
                            .filter(
                              (user) => task.assignee === user.employee_number
                            )
                            .map((user) => user.full_name)}
                        </Badge>
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
                          <option value={["In Review / QA", task.id]}>
                            In Review / QA
                          </option>
                          <option value={["In Progress", task.id]}>
                            In Progress
                          </option>
                          <option value={["To Do", task.id]}>To Do</option>
                          <option value={["Backlog", task.id]}>Backlog</option>
                          <option value={["Completed", task.id]}>
                            Completed
                          </option>
                        </select>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h2 className="Header">Completed</h2>
            {tasks
              .filter(
                (task) =>
                  // eslint-disable-next-line eqeqeq
                  task.status == "Completed" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div
                    className="CardDiv"
                    style={{ width: "100%" }}
                    key={task.id}
                  >
                    <Card className="Card mb-3 flex-grow-1">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          <Link className="TitleLink" to={`/tasks/${task.id}`}>
                            {task.title}
                          </Link>
                        </Card.Header>
                        <Badge pill bg="info" className="BadgeAssignee">
                          {users
                            .filter(
                              (user) => task.assignee === user.employee_number
                            )
                            .map((user) => user.full_name)}
                        </Badge>
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
                          <option value={["Completed", task.id]}>
                            Completed
                          </option>
                          <option value={["In Review / QA", task.id]}>
                            In Review / QA
                          </option>
                          <option value={["In Progress", task.id]}>
                            In Progress
                          </option>
                          <option value={["To Do", task.id]}>To Do</option>
                          <option value={["Backlog", task.id]}>Backlog</option>
                        </select>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
