import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import UsersList from "./Users/UsersList";
import SignupForm from "./Users/SignupForm.js";
import BoardForm from "./Boards/BoardForm";
import Nav from "./Nav";
import BoardList from "./Boards/BoardList";
import LoginForm from "./Users/LoginForm";
import { AuthContext, AuthProvider, useToken } from "./Auth";

function GetToken() {
  useToken();
  return null;
}

function App(props) {
  const [error, setError] = useState(null);
  const [boards, setBoards] = useState([]);
  // const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState('');

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

  // useEffect(() => {
  //   async function getData() {
  //     let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
  //     console.log('fastapi url: ', url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, [])

  useEffect(() => {
    getBoards();
    // getTasks();
    getUsers();
  }, []);

  return (
    <BrowserRouter>
    <AuthProvider>
      <GetToken />
      <Nav />
      <div className="gradient-background">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="boards/"
            element={<BoardList boards={boards} getBoards={getBoards} />}
          />
          <Route path="boards/">
            <Route path="new" element={<BoardForm getBoards={getBoards} />} />
          </Route>
          {/* <Route
            path="tasks/"
            element={<TaskList tasks={tasks} getTasks={getTasks} />}
          />
          <Route path="tasks">
            <Route path="new" element={<TaskForm getTasks={getTasks} />} />
          </Route> */}
          <Route
            path="users/"
            element={<UsersList users={users} getUsers={getUsers} />}
          />
          <Route path="users/">
            <Route path="new" element={<SignupForm getUsers={getUsers} />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
        </Routes>
        <ErrorNotification error={error} />
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
