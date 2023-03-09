// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { Card, Row, Col, Container, Badge, Button } from "react-bootstrap";
// import { useToken } from "../Auth";
// import { useNavigate } from "react-router-dom";

// export default function BoardDetail({
//   tasks,
//   getTasks,
//   boards,
//   getBoards,
//   users,
// }) {
//   const [taskStatus, setTaskStatus] = useState("");
//   const [boardNumVar, setBoardNumVar] = useState("");
//   const [allTasks, setAllTasks] = useState(tasks);
//   const [token] = useToken();
//   const navigate = useNavigate();

//   if (!token) {
//     console.log("token", token);
//     navigate("/users/login");
//   }

//   const onDragEnd = (result) => {
//     const { source, destination, draggableId } = result;
//     if (!destination) {
//       return;
//     }
//     if (source.droppableId !== destination.droppableId) {
//       const newTasks = Array.from(tasks);
//       const task = newTasks.find((task) => task.id === draggableId);
//       task.status = destination.droppableId;
//       setAllTasks(newTasks);
//     }
//   };

//   const updateTask = async (id, status) => {
//     const data = {};
//     data.status = taskStatus;

//     const taskUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/tasks/${id}`;
//     const fetchConfig = {
//       method: "PATCH",
//       body: JSON.stringify({ status: status }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const response = await fetch(taskUrl, fetchConfig);
//     if (response.ok) {
//       const task = await response.json();
//       setTaskStatus("");
//       getTasks();
//     }
//   };

//   if (tasks === undefined) {
//     return null;
//   }

//   const handleTaskStatus = async (event) => {
//     let statusString = event.target.value;
//     let statusArray = statusString.split(",");
//     const status = statusArray[0];
//     const id = statusArray[1];
//     updateTask(id, status);
//   };

//   const handleBoardNumVarChange = async (event) => {
//     const value = event.target.value;
//     setBoardNumVar(value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setBoardNumVar("");
//     getBoards();
//   };
//   return (
//     <>
//       <Container className="BoardContainer">
//         <Row className="BoardDropDownMenu">
//           <form
//             onSubmit={handleSubmit}
//             className="select-board-form"
//             id="select-board-form"
//           >
//             <div className="mb-3">
//               <div className="select-board">
//                 <select
//                   onChange={handleBoardNumVarChange}
//                   placeholder="Board"
//                   required
//                   type="text"
//                   name="boardNumVar"
//                   id="boardNumVar"
//                   className="board custom-select"
//                   value={boardNumVar}
//                 >
//                   <option>Board</option>
//                   {boards.map((board) => {
//                     return (
//                       <option key={board.id} value={board.id}>
//                         {board.name}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </div>
//             </div>
//           </form>
//         </Row>
//         <Link to="/tasks/new">
//           <Button
//             className="CreateTaskButton"
//             variant="outline-light"
//             size="lg"
//           >
//             Create Task
//           </Button>
//         </Link>
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Row>
//             <Droppable droppableId="Backlog" value={"Backlog"}>
//               {(provided) => (
//                 <Col
//                   className="Col"
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   <h2 className="Header">Backlog</h2>
//                   {tasks
//                     .filter(
//                       (task) =>
//                         task.status === "Backlog" && task.board === boardNumVar
//                     )
//                     .map((task) => {
//                       return (
//                         <Draggable key={task.id} draggableId={task.id}>
//                           {(provided) => (
//                             <div
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                             >
//                               <Card className="Card">
//                                 <Card.Body>
//                                   <Card.Header className="CardHead">
//                                     <Link
//                                       className="TitleLink"
//                                       to={`/tasks/${task.id}`}
//                                     >
//                                       {task.title}
//                                     </Link>
//                                   </Card.Header>
//                                   <Badge
//                                     pill
//                                     bg="info"
//                                     className="BadgeAssignee"
//                                   >
//                                     {users
//                                       .filter(
//                                         (user) =>
//                                           task.assignee === user.employee_number
//                                       )
//                                       .map((user) => user.full_name)}
//                                   </Badge>
//                                   <select
//                                     onChange={handleTaskStatus}
//                                     defaultValue={task.status}
//                                     required
//                                     type="text"
//                                     name="taskStatus"
//                                     id="taskStatus"
//                                     className="form-select"
//                                     value={taskStatus}
//                                   >
//                                     <option value={["Backlog", task.id]}>
//                                       Backlog
//                                     </option>
//                                     <option value={["To Do", task.id]}>
//                                       To Do
//                                     </option>
//                                     <option value={["In Progress", task.id]}>
//                                       In Progress
//                                     </option>
//                                     <option value={["In Review / QA", task.id]}>
//                                       In Review / QA
//                                     </option>
//                                     <option value={["Completed", task.id]}>
//                                       Completed
//                                     </option>
//                                   </select>
//                                 </Card.Body>
//                               </Card>
//                             </div>
//                           )}
//                         </Draggable>
//                       );
//                     })}
//                   {provided.placeholder}
//                 </Col>
//               )}
//             </Droppable>
            {/* <Droppable>
              <Col className="Col">
                <h2 className="Header">To Do</h2>
                {tasks
                  .filter(
                    (task) =>
                      task.status == "To Do" && task.board == boardNumVar
                  )
                  .map((task) => {
                    return (
                      <div key={task.id}>
                        <Card className="Card">
                          <Card.Body>
                            <Card.Header className="CardHead">
                              <Link
                                className="TitleLink"
                                to={`/tasks/${task.id}`}
                              >
                                {task.title}
                              </Link>
                            </Card.Header>
                            <Badge pill bg="info" className="BadgeAssignee">
                              {users
                                .filter(
                                  (user) =>
                                    task.assignee === user.employee_number
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
                              <option value={["Backlog", task.id]}>
                                Backlog
                              </option>
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
            </Droppable> */}
            {/* <Droppable>
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
                              <Link
                                className="TitleLink"
                                to={`/tasks/${task.id}`}
                              >
                                {task.title}
                              </Link>
                            </Card.Header>
                            <Badge pill bg="info" className="BadgeAssignee">
                              {users
                                .filter(
                                  (user) =>
                                    task.assignee === user.employee_number
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
                              <option value={["Backlog", task.id]}>
                                Backlog
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
            </Droppable> */}
            {/* <Droppable>
              <Col className="Col">
                <h2 className="Header">In Review / QA</h2>
                {tasks
                  .filter(
                    (task) =>
                      task.status == "In Review / QA" &&
                      task.board == boardNumVar
                  )
                  .map((task) => {
                    return (
                      <div key={task.id}>
                        <Card className="Card">
                          <Card.Body>
                            <Card.Header className="CardHead">
                              <Link
                                className="TitleLink"
                                to={`/tasks/${task.id}`}
                              >
                                {task.title}
                              </Link>
                            </Card.Header>
                            <Badge pill bg="info" className="BadgeAssignee">
                              {users
                                .filter(
                                  (user) =>
                                    task.assignee === user.employee_number
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
                              <option value={["Backlog", task.id]}>
                                Backlog
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
            </Droppable> */}
            {/* <Droppable>
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
                              <Link
                                className="TitleLink"
                                to={`/tasks/${task.id}`}
                              >
                                {task.title}
                              </Link>
                            </Card.Header>
                            <Badge pill bg="info" className="BadgeAssignee">
                              {users
                                .filter(
                                  (user) =>
                                    task.assignee === user.employee_number
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
                              <option value={["Backlog", task.id]}>
                                Backlog
                              </option>
                            </select>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
              </Col>
            </Droppable> */}
//           </Row>
//         </DragDropContext>
//       </Container>
//     </>
//   );
// }
