import React, { useState } from 'react';
import { useToken } from '../Auth';
import { useNavigate } from "react-router-dom";

function SignupForm({getUsers}) {

    const [, , , signup] = useToken();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
      }

    const handleFullNameChange = (event) => {
        const value = event.target.value;
        setFullName(value);
      }

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
      }

    const handleEmployeeNumberChange = (event) => {
        const value = event.target.value;
        setEmployeeNumber(value);
      }

    const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.email = email;
    data.full_name = fullName;
    data.password = password;
    data.employee_number = employeeNumber;

    const signupRequest = await signup(email, fullName, password, employeeNumber)

    setEmail('');
    setFullName('');
    setPassword('');
    setEmployeeNumber('');
    getUsers();
    navigate("/");

    };

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Please sign up</h1>
            <form onSubmit={handleSubmit} id="create-user-form">
              <div className="form-floating mb-3">
                <input onChange={handleEmailChange} placeholder="You@email.com" required type="email" name="email" id="email" className="form-control" value={email} />
                <label htmlFor="email">email</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleFullNameChange} placeholder="First Last" required type="text" name="full_name" id="full_name" className="form-control" value={fullName} />
                <label htmlFor="full_name">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePasswordChange} placeholder="SuperSecret#1" required type="password" name="password" id="password" className="form-control" value={password} />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEmployeeNumberChange} placeholder="Employee number" required max="9999" type="number" name="employee_number" id="employee_number" className="form-control" value={employeeNumber} />
                <label htmlFor="employee_number">Employee number</label>
              </div>
              <button className="btn btn-primary">Create account</button>
            </form>
          </div>
        </div>
      </div>
    )
}
export default SignupForm;
