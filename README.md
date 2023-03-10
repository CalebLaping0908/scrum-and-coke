# Scrum & Coke

Welcome to your ideal solution for team and task management. Scrum & Coke provides a platform to manage many teams and projects at the same time by giving you the ability to create multiple scrum boards. On a board, you can create tasks and assign them to yourself or other team members, keep track of their status by easily moving them between columns, and make changes to the tasks at any time. Scrum & Coke makes collaboration and organization easy for you and your team!

### Developed by:

- Liz Gonzalez
- Todd Compton
- Donald Powell
- Caleb Laping

## Getting Started

1. Fork this repository
2. Clone the forked repository onto your local computer and inside of your chosen directory:

```
   git clone <<respository.url.here>>
```

3. Build and run the project using Docker with the following commands:

```
docker volume create postgres-data
docker-compose build
docker-compose up
```

- Make sure all of your docker containers are running
- View the app in your browser: https://404-waffle.gitlab.io/scrum-and-coke/

## The Design

- Users can sign up for an account, logout, and login.
- Inside of the boards dropdown menu in the navigation bar, there is a link to a form that allows you to create a new board. After creation, the board will now be accessible inside of the "My boards" page on the navigation bar.
- The "My boards" page holds all of the boards that a user has. They can click on any board to view that board in detail, which will be the page that they can create and view tasks. On this page, each task shows a title, assignee, and the current status of the task.
- On the board detail page, there is a 'create task' button which brings you to a form where you can create a new task. After creation, the task is populated onto the associated board, and you are redirected back to that same board.
- Also on the board detail page, users have the ability to click on a dropdown on each task, which holds all of the statuses a task can be (Backlog, To Do, In Progress, In Review / QA, and Completed), and select a new status for that task, and the task will automatically move to the updated status column.
- The title of each task doubles as a link to view that specific task in detail. This allows for a closer look at the task and shows all of the task information including the description. On this page, there is also a button to delete that specific task, as well as a button that takes you to a form that allows you to edit every field on the task. After either deleting or editing a task, you will be redirected back to the board that you selected the tasks from.

## In-Depth Application Design

- [API Design](/docs/api_design.md)
- [Data Model](/docs/data_model.md)
- [UI Wireframe](/docs/wireframe.png)
