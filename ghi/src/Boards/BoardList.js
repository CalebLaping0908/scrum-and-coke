import React from "react";
import { useToken } from "../Auth";
import { useNavigate, Link } from "react-router-dom";

export default function BoardList({ boards }) {
  const [token] = useToken();
  const navigate = useNavigate();

  if (!token) {
    navigate("/users/login");
  }

  return (
    <div className="container">
      <h1>My Boards</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => {
            return (
              <tr key={board.id}>
                <Link className="BoardLink" to={`/boards/${board.id}`}>
                <td>{board.name}</td>
                </Link>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


