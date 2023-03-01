import React, { useState } from 'react';

export default function BoardDetail({ tasks, getTasks, boards, getBoards, statuses }){
  const [taskStatus, setTaskStatus] = useState('');
  const [boardNumVar, setBoardNumVar] = useState('');

  
  const updateTask = async (id) => {
    const data = {};
    console.log("STATUS", data.status);
    data.status = taskStatus;
    console.log("STATUS", data.status);

    const taskUrl = `http://localhost:8080/tasks/${id}/`;
    const fetchConfig = {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json',
        },
    };

  const response = await fetch(taskUrl, fetchConfig);
  if (response.ok) {
    const task = await response.json();
    console.log(task);
    setTaskStatus('');
    // getTasks();
  }
  }
  if (tasks === undefined) {
     return null
  }


  const handleTaskStatus = async (event) => {
    const value = event.target.value;
    setTaskStatus(value);
    updateTask();
    console.log("Value", value)
    console.log("taskStatus", taskStatus)
    }
  
  const handleBoardNumVarChange = async (event) => {
    const value = event.target.value;
    setBoardNumVar(value);
    }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBoardNumVar('');
    getBoards();        
    
  }

  return (
    <>
          <div><br></br></div>
      <form onSubmit={handleSubmit} id="select-board-form">
              <div className="mb-3">
                <div className="form-floating mb-3">
                <select onChange={handleBoardNumVarChange} placeholder="Board" required type="text"  name="boardNumVar" id="boardNumVar" className="form-select" value={boardNumVar}>
                  <option>Board</option>
                  {boards.map(board => {
                    return (
                        <option key={board.id} value={board.id}>
                            {board.name}
                        </option>
                    );
                  })}
                </select>
                </div>
              </div>
      </form> 

      {/* Once the state of boardNumVar is selected, use it to filter tasks for the board display */}
      <table className="table table-striped align-middle mt-5">
        <thead>
          <tr>
            <th>Backlog</th>
            <th>To Do</th>
            <th>In Progress</th> 
            <th>In Review/QA</th> 
            <th>Complete</th>             
          </tr>
        </thead>
        <tbody>
            {/* <td>Backlog */}
                {/* <div class="card">
                <div class="card-body">
                    {tasks.filter(task => task.status == "Backlog" && task.board.id == boardNumVar).map(task => {
                            return (
                    <h5 class="card-title">Task title</h5>
                    <p class="card-text">Task description.</p>
                    <a href="#" class="btn btn-primary">
                    Details
                    </a>

                </div>
                </div>
                    )} */}




                {/* <th>Title</th>
                <th>Description</th>
                <th>Assignee</th> 
                <th>Status</th>
                    <tbody>
                        {tasks.filter(task => task.status == "Backlog" && task.board.id == boardNumVar).map(task => {
                            return (
                            <tr key={task.id}>
                                <td>{ task.title }</td>
                                <td>{ task.description }</td>
                                <td>{ task.assignee }</td>
                                <td>
                                    <select onChange={updateTask(task.id)} placeholder= { task.status } required type="text"  name="taskStatus" id="taskStatus" className="form-select" value={taskStatus}>
                                    <option>Status</option>
                                    {tasks.map(task => {
                                    return (
                                    <option key={task.id} value={task.status}>
                                        {task.status}
                                    </option>
                                    );
                                    })}
                                    </select>
                                </td>   
                            </tr>
                            );
                        })}
                    </tbody>
            </td> 
            <td>To Do
                <th>Title</th>
                <th>Description</th>
                <th>Assignee</th> 
                <th>Status</th>
                    <tbody>
                        {tasks.filter(task => task.status == "To Do" && task.board.id == boardNumVar).map(task => {
                            return (
                            <tr key={task.id}>
                                <td>{ task.title }</td>
                                <td>{ task.description }</td>
                                <td>{ task.assignee }</td>
                                <td>
                                    <select onChange={updateTask(task.id)} placeholder= { task.status } required type="text"  name="taskStatus" id="taskStatus" className="form-select" value={taskStatus}>
                                    <option>Status</option>
                                    {tasks.map(task => {
                                    return (
                                    <option key={task.id} value={task.status}>
                                        {task.status}
                                    </option>
                                    );
                                    })}
                                    </select>
                                </td>  
                            </tr>
                            );
                        })}
                    </tbody>
            </td> */}
            <td>
                <th>Title</th>
                <th>Description</th>
                <th>Assignee</th> 
                <th>Status</th>
                    <tbody>
                        {tasks.filter(task => task.status == "In Progress" && task.board == boardNumVar).map(task => {
                            return (
                            <tr key={task.id}>
                                <td>{ task.title }</td>
                                <td>{ task.description }</td>
                                <td>{ task.assignee }</td>
                                <td>{ task.status }</td>
                                <td>
                                      {/* <form onSubmit={updateTask} id="task-status-form">  */}
                                        <select onChange={handleTaskStatus} placeholder="Status" required type="text"  name="taskStatus" id="taskStatus" className="form-select" value={taskStatus}>
                                        <option>Status</option>
                                        {statuses.map(status => {
                                        return (
                                        <option key={status.id} value={status.status}>
                                            {status.status}
                                        </option>
                                        );
                                        })}
                                        </select>
                                      {/* </form> */}
                                </td>   
                            </tr>
                            );
                        })}
                    </tbody>
            </td>
            {/* <td>In Review/QA
                <th>Title</th>
                <th>Description</th>
                <th>Assignee</th> 
                <th>Status</th>
                    <tbody>
                        {tasks.filter(task => task.status == "In Review / QA" && task.board.id == boardNumVar).map(task => {
                            return (
                            <tr key={task.id}>
                                <td>{ task.title }</td>
                                <td>{ task.description }</td>
                                <td>{ task.assignee }</td>
                                <td>
                                    <select onChange={updateTask(task.id)} placeholder= { task.status } required type="text"  name="taskStatus" id="taskStatus" className="form-select" value={taskStatus}>
                                    <option>Status</option>
                                    {tasks.map(task => {
                                    return (
                                    <option key={task.id} value={task.status}>
                                        {task.status}
                                    </option>
                                    );
                                    })}
                                    </select>
                                </td>  
                            </tr>
                            );
                        })}
                    </tbody>
            </td>
            <td>Complete!
                <th>Title</th>
                <th>Description</th>
                <th>Assignee</th> 
                <th>Status</th>
                    <tbody>
                        {tasks.filter(task => task.status == "Completed" && task.board.id == boardNumVar).map(task => {
                            return (
                            <tr key={task.id}>
                                <td>{ task.title }</td>
                                <td>{ task.description }</td>
                                <td>{ task.assignee }</td>
                                <td>
                                    <select onChange={updateTask(task.id)} placeholder= { task.status } required type="text"  name="taskStatus" id="taskStatus" className="form-select" value={taskStatus}>
                                    <option>Status</option>
                                    {tasks.map(task => {
                                    return (
                                    <option key={task.id} value={task.status}>
                                        {task.status}
                                    </option>
                                    );
                                    })}
                                    </select>
                                </td>   
                            </tr>
                            );
                        })}
                    </tbody>
            </td> */}
        </tbody>
      </table>      
    </>
    );
}