import React, { useState } from 'react';
import { useToken, useAuthContext } from '../Auth';
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [, login] = useToken();
    const {isLoggedIn} = useAuthContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
    setUsername('');
    setPassword('');
    navigate("/");

    };

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} id="login-form">
              <div className="form-floating mb-3">
                <input onChange={handleUsernameChange} placeholder="Username" required type="text" name="username" id="username" className="form-control" value={username} />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePasswordChange} placeholder="SuperSecret#1" required type="password" name="password" id="password" className="form-control" value={password} />
                <label htmlFor="password">Password</label>
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    )

}

export default LoginForm;
