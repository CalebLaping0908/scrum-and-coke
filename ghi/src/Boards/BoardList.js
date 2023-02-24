import React from "react";

export default function BoardList({ boards }) {
  console.log(boards);
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
                <td>{board.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
