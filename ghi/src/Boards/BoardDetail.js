import React from "react";

export default function BoardDetail({ boards, tasks }) {
  if (boards === undefined) {
    return null;
  }
  // write a function to generate the tasks and return the html for what it should look like,
  // similar to conference go's conference cards
  return (
    <div className="container">
      {/* Filter heading below to match with the board id that the user selected */}
      <h1>Board</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Backlog</th>
            <th>To Do</th>
            <th>In progress</th>
            <th>In review</th>
            <th>Completed</th>
          </tr>
        </thead>

        {/* <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.title}{task.description}{task.assignee}</td>
                ## task will populate in the column associated with status ID
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
}
