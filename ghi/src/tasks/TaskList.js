import React from "react";
import { useToken } from "../Auth";
import { useNavigate } from "react-router-dom";

function TaskList({ tasks, getTask }) {
  const [token] = useToken();
  const navigate = useNavigate();

  if (!token) {
    navigate("/scrum-and-coke/users/login");
  }

  if (tasks === undefined) {
    return null;
  }

  return (
    <div className="container">
      <h1>Current Tasks</h1>
      <table className="table table-striped align-middle mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    value={task.id}
                    onClick={() => getTask(task.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
