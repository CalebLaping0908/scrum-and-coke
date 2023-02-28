import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Construct from './Construct.js'
import './App.css';
import UsersList from './Users/UsersList';
import CreateTask from './tasks/CreateTaskForm';
import SignupForm from './Users/SignupForm.js';
import MainPage from "./MainPage";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import BoardForm from "./Boards/BoardForm";
import Nav from "./Nav";
import BoardList from './Boards/BoardList';
import TaskList from './tasks/TaskList';


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
      const TaskListResponse = await fetch('http://localhost:8080/tasks/');

      if (TaskListResponse.ok) {
        const tasks = await TaskListResponse.json();
        setTasks(tasks);
      }
    };

    const getStatuses = async () => {
      const StatusResponse = await fetch('http://localhost:8080/status/');

      if (StatusResponse.ok) {
        const statuses = await StatusResponse.json();
        setStatuses(statuses);
      }
    };


  useEffect (() => {
  getBoards();
  getTasks();
  getUsers();
  getTasks();
  getStatuses();
}, [])

  return (
    <BrowserRouter>
      <Nav />
      <div className="gradient-background">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="boards/" element={<BoardList boards={boards} getBoards={getBoards} />} />
          <Route
            path="boards/"
            element={<BoardList boards={boards} getBoards={getBoards} />}
          />
          <Route path="boards/">
            <Route path="new" element={<BoardForm getBoards={getBoards} />} />
          </Route>
          <Route path="tasks/" >
            <Route path="" element={<TaskList tasks={tasks} getTasks={getTasks} /> } />
            <Route path="new" element={<CreateTask tasks={tasks} users={users} boards={boards} getTasks={getTasks} statuses={statuses} /> } />

          </Route>
          <Route path="users/" element={<UsersList users={users} getUsers={getUsers}/>} />
          <Route
            path="users/"
            element={<UsersList users={users} getUsers={getUsers} />}
          />
          <Route path="users/">
            <Route path="new" element={<SignupForm getUsers={getUsers} />} />
          </Route>
        </Routes>
        <ErrorNotification error={error} />
      </div>
    </BrowserRouter>
  );
}

export default App;
