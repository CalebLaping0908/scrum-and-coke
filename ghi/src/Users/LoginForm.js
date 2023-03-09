import React, { useState } from "react";
import { useToken, useAuthContext } from "../Auth";
import { useNavigate, Link } from "react-router-dom";
import { Button, Row } from "react-bootstrap";

function LoginForm() {
  const [, login] = useToken();
  const { isLoggedIn } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.username = username;
    data.password = password;

    const error = await login(username, password);
    if (error) {
      isLoggedIn(false);
    }
    setUsername("");
    setPassword("");
    navigate("/scrum-and-coke/");
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="FormLabel">Login</h1>
          <form onSubmit={handleSubmit} id="login-form">
            <div className="InputText">
              <input
                onChange={handleUsernameChange}
                placeholder="Employee Number"
                required
                type="text"
                name="username"
                id="username"
                className="form-control"
                value={username}
              />
              <label htmlFor="username"></label>
            </div>
            <div className="InputText">
              <input
                onChange={handlePasswordChange}
                placeholder="Password"
                required
                type="password"
                name="password"
                id="password"
                className="form-control"
                value={password}
              />
              <label htmlFor="password"></label>
            </div>
            <Button className="FormButton" variant="primary" type="submit">
              Login
            </Button>
            <Row>
              <p className="SignupPrompt">Don't have an account?</p>
              <Link to="/users/new">
                <Button className="SignupRedirect" variant="primary">
                  Sign up here
                </Button>
              </Link>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
