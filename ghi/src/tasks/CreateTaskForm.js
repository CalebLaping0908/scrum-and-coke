// import React, {useState } from 'react'


// export default function CreateTask( tasklist) {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [assignee, setAssignee] = useState('');
//     const [board, setBoard] = useState('')


//     const handleNameChange = (e) => {
//         const name = e.target.value
//         setName(value)
//     }

//     const handleDescriptionChange = (e) => {
//         const name = e.target.value
//         setDescription(value)
//     }

//     const handleAssigneeChange = (e) => {
//         const assignee = e.target.value
//         setAssignee(value)
//     }

//     const handleBoardChange = (e) => {
//         const board = e.target.value
//         setBoard(value)
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = {};
//         data.name = name;
//         data.description = description;
//         data.assignee = assignee;
//         data.board = board;


//         const boardURL = 'http://localhost:8080/boards';
//         const assigneeURL = 'http://localhost:8080/users';
//         const boardfetchConfig = {
//             method: "get",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         const assigneefetchConfig = {
//             method: "get",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         const boardResponse = await fetch(boardURL, boardfetchConfig);
//         const assigneeResponse = await fetch(assigneeURL, assigneefetchConfig);
//         if (boardResponse.ok && assigneeResponse.ok) {
//             const newTask = await Response.json();

//             setName('')
//             setDescription('')
//             setAssignee([])
//             setBoard([])
//             getTasks();
//         }

//     }
//     return (
//         <div className="row">
//             <div className="offset-3 col-6">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Create a Task</h1>
//                     <form onSubmit={handleSubmit} id="create-task-form">
//                         <div className="form-floating mb-3">
//                             <input onChange={handleNameChange} placeholder="Name" required type="text" name="Name" id="Name" className="form-control" value={name} />
//                             <label htmlFor="name">Name</label>
//                         </div>
//                         <div className="form-floating mb-3">
//                             <input onChange={handleDescriptionChange} placeholder="Description" required type="text" name="description" id="description" className="form-control" value={description} />
//                             <label htmlFor="description">Description</label>
//                         </div>
//                         <div className="mb-3">
//                         <select required onChange={handleAssigneeChange} name="assignee" id="assignee" className="form-select" value={assignee}>
//                             <option value="">Choose an Assignee</option>
//                             {models.map(assignee => {
//                                 return (
//                                     <option key={assignee.id} value={assignee.id}>
//                                         {assignee.name}
//                                     </option>
//                                 )
//                             })}
//                         </select>
//                         </div>
//                         <div className="mb-3">
//                         <select required onChange={handleBoardChange} name="board" id="board" className="form-select" value={board}>
//                             <option value="">Choose a Board</option>
//                             {models.map(board => {
//                                 return (
//                                     <option key={board.id} value={board.id}>
//                                         {board.name}
//                                     </option>
//                                 )
//                             })}
//                         </select>
//                         </div>
//                     <button className="btn btn-primary">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )

// }
