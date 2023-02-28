import React from 'react';


function TaskList({ tasks }){
  console.log(tasks)
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
          {tasks.map(task => {
            return (
              <tr key={task.id}>
                <td>{ task.title }</td>
                <td>{ task.description }</td>
                <td>{ task.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    );
}

export default TaskList;
