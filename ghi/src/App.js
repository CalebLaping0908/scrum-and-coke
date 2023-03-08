import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateTask from "./tasks/CreateTaskForm";
import SignupForm from "./Users/SignupForm.js";
import MainPage from "./MainPage";
import ErrorNotification from "./ErrorNotification";
import BoardForm from "./Boards/BoardForm";
import NavBar from "./Nav";
import LoginForm from "./Users/LoginForm";
import Logout from "./Users/Logout";
import { AuthProvider, useToken } from "./Auth";
import BoardDetail from "./Boards/BoardDetail";
import TaskDetail from "./tasks/TaskDetail";
import EditTask from "./tasks/UpdateTaskForm";

function GetToken() {
  useToken();
  return null;
}

function App(props) {
  const [error, setError] = useState(null);
  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [statuses, setStatuses] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/users/");
    if (response.ok) {
      const data = await response.json();
      const users = data.users;
      setUsers(users);
    } else {
      console.log("drat! something happened");
      setError("Unable to list all users");
    }
  };

  const getBoards = async () => {
    const response = await fetch("http://localhost:8080/boards/");
    if (response.ok) {
      const data = await response.json();
      const boards = data.boards;
      setBoards(boards);
    }
  };

  const getTasks = async () => {
    const TaskListResponse = await fetch("http://localhost:8080/tasks/");
    if (TaskListResponse.ok) {
      const tasks = await TaskListResponse.json();
      setTasks(tasks);
    }
  };

  const getStatuses = async () => {
    const StatusResponse = await fetch("http://localhost:8080/status/");
    if (StatusResponse.ok) {
      const statuses = await StatusResponse.json();
      setStatuses(statuses);
    }
  };

  useEffect(() => {
    getBoards();
    getTasks();
    getUsers();
    getStatuses();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <GetToken />
        <NavBar />
        <div className="gradient-background">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="boards/">
              <Route
                path=""
                element={
                  <BoardDetail
                    getTasks={getTasks}
                    tasks={tasks}
                    users={users}
                    boards={boards}
                    statuses={statuses}
                  />
                }
              />
              <Route path="new" element={<BoardForm getBoards={getBoards} />} />
            </Route>
            <Route path="tasks/">
              <Route
                path="new"
                element={
                  <CreateTask
                    tasks={tasks}
                    users={users}
                    boards={boards}
                    getTasks={getTasks}
                    statuses={statuses}
                  />
                }
              />
              <Route
                path=":id"
                element={
                  <TaskDetail
                    tasks={tasks}
                    users={users}
                    boards={boards}
                    statuses={statuses}
                    getTasks={getTasks}
                  />
                }
              />
              <Route
                path=":id/edit"
                element={
                  <EditTask
                    tasks={tasks}
                    users={users}
                    boards={boards}
                    statuses={statuses}
                    getTasks={getTasks}
                  />
                }
              />
            </Route>
            <Route path="users/">
              <Route path="new" element={<SignupForm getUsers={getUsers} />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
          <ErrorNotification error={error} />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
