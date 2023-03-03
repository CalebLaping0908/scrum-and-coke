import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container, Badge, Button } from "react-bootstrap";

export default function BoardDetailTest({
  tasks,
  getTasks,
  boards,
  getBoards,
}) {
  const [taskStatus, setTaskStatus] = useState("");
  const [boardNumVar, setBoardNumVar] = useState("");

  const updateTask = async (id, status) => {
    const data = {};
    console.log("ID", id);
    data.status = taskStatus;
    console.log("STATUS!!!!!!!!!!", status);

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
    console.log("status", status);
    console.log("id", id);
    // setTaskStatus(status);
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

  //    useEffect(() => {
  //      getTasks();
  //    }, []);

  return (
    <>
      <div>{/* <br></br> */}</div>
      <form onSubmit={handleSubmit} id="select-board-form">
        <div className="mb-3">
          <div className="select-board">
            <select
              onChange={handleBoardNumVarChange}
              placeholder="Board"
              required
              type="text"
              name="boardNumVar"
              id="boardNumVar"
              className="board"
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

      {/* Once<Cole state of boardNumVar is selected, use it to filter tasks for<Cole board display */}
      <Container>
        <Link to="/tasks/new">
          <Button className="EditButton" variant="outline-light" size="lg">
            Create Task
          </Button>
        </Link>
        <Row>
          <Col className="Col">
            <h2 className="Header">Backlog</h2>
            {tasks
              .filter(
                (task) => task.status == "Backlog" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div key={task.id}>
                    <Card className="Card">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          {task.title}
                        </Card.Header>
                        <Card.Text className="CardText">
                          {task.description}
                        </Card.Text>
                        <Badge pill bg="info">
                          {/* {task.assignee} */} Mochi B
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
          <Col className="Col">
            <h2 className="Header">To Do</h2>
            {tasks
              .filter(
                (task) => task.status == "To Do" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div key={task.id}>
                    <Card className="Card">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          {task.title}
                        </Card.Header>
                        <Card.Text className="CardText">
                          {task.description}
                        </Card.Text>
                        <Badge pill bg="info">
                          {/* {task.assignee} */} Rue G
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
          <Col className="Col">
            <h2 className="Header">In Progress</h2>
            {tasks
              .filter(
                (task) =>
                  task.status == "In Progress" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div key={task.id}>
                    <Card className="Card">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          {task.title}
                        </Card.Header>
                        <Card.Text className="CardText">
                          {task.description}
                        </Card.Text>
                        <Badge pill bg="info">
                          {/* {task.assignee} */} Jane D
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
          <Col className="Col">
            <h2 className="Header">In Review / QA</h2>
            {tasks
              .filter(
                (task) =>
                  task.status == "In Review / QA" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div key={task.id}>
                    <Card className="Card">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          {task.title}
                        </Card.Header>
                        <Card.Text className="CardText">
                          {task.description}
                        </Card.Text>
                        <Badge pill bg="info">
                          {/* {task.assignee} */} Bunny B
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
          <Col className="Col">
            <h2 className="Header">Completed</h2>
            {tasks
              .filter(
                (task) =>
                  task.status == "Completed" && task.board == boardNumVar
              )
              .map((task) => {
                return (
                  <div key={task.id}>
                    <Card className="Card">
                      <Card.Body>
                        <Card.Header className="CardHead">
                          {task.title}
                        </Card.Header>
                        <Card.Text className="CardText">
                          {task.description}
                        </Card.Text>
                        <Badge pill bg="info">
                          {/* {task.assignee} */} Liz G
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
