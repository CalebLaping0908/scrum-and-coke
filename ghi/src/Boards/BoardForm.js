import React, { useState, useEffect } from "react";
import { useToken } from "../Auth";
import { useNavigate } from "react-router-dom";

export default function BoardForm({ getBoards }) {
  const [name, setName] = useState("");
  const [token] = useToken();
  const navigate = useNavigate();

  useEffect( () => {
    if (!token) {
    navigate("/users/login");
  }
  }, []);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.name = name;

    const boardUrl = "http://localhost:8080/boards/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(boardUrl, fetchConfig);
    if (response.ok) {
      const newBoard = await response.json();
      setName("");
      getBoards();
    }
  };
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a board</h1>
          <form onSubmit={handleSubmit} id="create-board-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                placeholder="Name"
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={name}
              />
              <label htmlFor="name">Name</label>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
