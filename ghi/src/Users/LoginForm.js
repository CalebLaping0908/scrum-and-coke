import React, { useState } from "react";
import { useToken } from "../Auth";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function LoginForm() {
  const [, login] = useToken();
  const [error, setError] = useState("");
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

    const response = await login(username, password);

    if (response === "<br>detail: Incorrect username or password") {
      setError("Incorrect employee number or password");
    } else {
      setUsername("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="FormLabel">Login</h1>
          <p className="SignupPrompt">
            Don't have an account? <Link to="/users/new">Sign up</Link>
          </p>
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
                maxLength="4"
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
          </form>
          <p className="LoginFail">{error}</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
