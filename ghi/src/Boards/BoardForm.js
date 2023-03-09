import React, { useState } from "react";
import { useToken } from "../Auth";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function BoardForm({ getBoards }) {
  const [name, setName] = useState("");
  const [token] = useToken();
  const navigate = useNavigate();

  if (!token) {
    console.log("token", token);
    navigate("/scrum-and-coke/users/login");
  }

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.name = name;

    const boardUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/boards`;
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
      console.log(newBoard);
      setName("");

      navigate(`/scrum-and-coke/boards`);
      getBoards();
    }
  };
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1 className="FormLabel">Create a board</h1>
          <form onSubmit={handleSubmit} id="create-board-form">
            <div className="InputText">
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
              <label htmlFor="name"></label>
            </div>
            <Button className="FormButton" variant="primary" type="submit">
              Create
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
