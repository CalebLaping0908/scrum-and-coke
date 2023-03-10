# Data Model

### Board:

| field | type   | optional? | unique? |
| ----- | ------ | --------- | ------- |
| name  | string | no        | no      |

### Task:

| field       | type                              | optional? | unique? |
| ----------- | --------------------------------- | --------- | ------- |
| title       | string                            | no        | no      |
| description | string                            | no        | no      |
| assignee    | reference to user employee number | no        | no      |
| board       | reference to board id             | no        | yes     |
| status      | reference to statuses table       | no        | yes     |

### User:

| field           | type   | optional? | unique? |
| --------------- | ------ | --------- | ------- |
| email           | string | no        | no      |
| full_name       | string | no        | no      |
| hashed_password | string | no        | no      |
| employee_number | int    | no        | yes     |

- The user's password is converted to and then stored in our database as a hashed password, but on the user's end it is just a regular password.

### Statuses:

| id  | status         |
| --- | -------------- |
| int | Backlog        |
| int | To Do          |
| int | In Progress    |
| int | In Review / QA |
| int | Completed      |

- The status table data does not come from user input. These values are a permanent part of our application to allow for the desired functionality.
