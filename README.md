# Scrum & Coke

Welcome to your ideal solution for team and task management. Scrum & Coke provides a platform to manage many teams and projects at the same time. You can create tasks and assign them to yourself or other team members, keep track of their status by easily moving them between columns, and make changes to the tasks at any time. Collaboration and organization for the win.

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
- View the app in your browser: http://localhost:3000/

## **INSERT A GIF OF OUR SITE HERE.**

## The Design

- Users can sign up for an account, logout, and login
- Inside of the boards dropdown menu in the navigation bar, there is a link to a form that allows you to create a new board. After creation, that board can now be chosen inside of the dropdown on the 'My boards' page.
- The boards page holds all of the boards that a user has. They can change the board they're viewing simply by choosing another board from the dropdown.
- After choosing a board to view, they can view all of the tasks that are on that board. On this main page, each task shows a title, assignee, and the current status of the task.
- On the boards page, there is a 'create task' button which brings you to a form where you can create a new task. After creation, the task is populated onto the associated board.
- Also on the boards page, users have the ability to click on a dropdown on each task, which holds all of the statuses a task can be (Backlog, To Do, In Progress, In Review / QA, and Completed), and select a new status for that task, and the task will automatically move to the updated status column.
- The title of each task doubles as a link to view that specific task in detail. This allows for a closer look at the task and shows all of the task information including the description. On this page, there is also a button to delete that specific task, as well as a button that takes you to a form that allows you to edit every field on the task.

API design
Data Model
