# APIs

Send and view data for API endpoints at: https://boards-service.nov-pt-2.mod3projects.com/docs

## Boards

| Action         | Method | Path       |
| -------------- | ------ | ---------- |
| Get all boards | GET    | /boards    |
| Get one board  | GET    | /boards/id |
| Create a board | POST   | /boards/   |
| Update a board | PUT    | /boards/id |
| Delete a board | DELETE | /boards/id |

**NOTE:** You cannot delete a board that still has tasks assigned to it. Either move the tasks on that board to a different board, or delete all of the tasks on that board before deleting the actual board.

- Get all boards (output):

```
{
  "boards": [
    {
      "id": int,
      "name": string
    },
    {
      "id": int,
      "name": string
    },
  ]
}
```

- Create a board (input):

```
{
  "name": string
}
```

- Create a board (output):

```
{
  "id": int,
  "name": string
}
```

- Get one board (output):

```
{
  "id": int,
  "name": string
}
```

- Update a board (input):

```
{
  "name": string
}
```

- Update a board (output):

```
{
  "id": int,
  "name": string
}
```

## Users

- Replace the employee_number value with the chosen user's **employee number.**

| Action        | Method | Path                   |
| ------------- | ------ | ---------------------- |
| Get all users | GET    | /users                 |
| Get one user  | GET    | /users/employee_number |
| Create a user | POST   | /users/                |
| Delete a user | DELETE | /users/employee_number |

**NOTE:** You cannot delete a user that has tasks assigned to them. You first have to reassign the tasks to other users, and then the user may be deleted.

- Get all users (output):

```
{
  "users": [
    {
      "id": int,
      "email": string,
      "full_name": string,
      "hashed_password": string,
      "employee_number": int
    },
    {
      "id": int,
      "email": string,
      "full_name": string,
      "hashed_password": string,
      "employee_number": int
    }
  ]
}
```

- Get one user (output):

```
    {
      "id": int,
      "email": string,
      "full_name": string,
      "hashed_password": string,
      "employee_number": int
    }
```

- Create a user (input):

```
{
  "email": string,
  "full_name": string,
  "password": string,
  "employee_number": int
}
```

- Create a user (output):

```
{
  "access_token": string,
  "token_type": "Bearer",
  "user": {
    "id": int,
    "email": string,
    "full_name": string,
    "hashed_password": string,
    "employee_number": int
  }
}
```

## Tasks

| Action             | Method | Path      |
| ------------------ | ------ | --------- |
| Get all tasks      | GET    | /tasks    |
| Get one task       | GET    | /tasks/id |
| Create a task      | POST   | /tasks/   |
| Update a task      | PUT    | /tasks/id |
| Update task status | PATCH  | /tasks/id |
| Delete a task      | DELETE | /tasks/id |

- Get all tasks (output):

```
[
  {
    "id": int,
    "title": string,
    "description": string,
    "assignee": int,
    "board": int,
    "status": string
  },

]
```

- Create a task (input):
- **Important notes:**
  1. "status" **must** be one of the 5 following values:
     (Backlog, To Do, In Progress, In Review / QA, Completed)
     This value is also case sensitive.
  2. "board" is the id value of a board, and it must be an existing board. Make sure you have a board created before creating a task.
  3. "assignee" is the employee number of an existing user. Make sure you have a user created before creating a task.

```
{
  "title": string,
  "description": string,
  "assignee": int,
  "board": int,
  "status": string
}
```

- Create a task (output):

```
{
  "id": int,
  "title": string,
  "description": string,
  "assignee": int,
  "board": int,
  "status": string
}
```

- Get one task (output):

```
{
  "id": int,
  "title": string,
  "description": string,
  "assignee": int,
  "board": int,
  "status": string
}
```

- Update a task (input):
- **Note:** the same rules apply here as the ones specified above for creating a task.

```
{
  "title": string,
  "description": string,
  "assignee": int,
  "board": int,
  "status": string
}
```

- Update a task (output):

```
{
  "id": int,
  "title": string,
  "description": string,
  "assignee": int,
  "board": int,
  "status": string
}
```

- Update task's status (input):
- **Important notes:**

1. The status value is case sensitive and limited to these 5 options:
   (Backlog, To Do, In Progress, In Review / QA, Completed)
2. The other values **must** remain the same as they currently are. Make sure the values match the current task details.
3. The **only** value that can change in this request is "status".

```
{
  "title": string,
  "description": string,
  "assignee": int,
  "board": int,
  "status": string
}
```

- Update task's status (output):

```
{
  "id": int,
  "title": string,
  "description": string,
  "assignee": int,
  "board": int,
  "status": string
}
```
