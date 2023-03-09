import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import { useToken } from "../Auth";

export default function TaskDetail({ getTasks }) {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [user, setUser] = useState("");
  const [token] = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTask() {
      const taskUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/tasks/${id}`;
      const fetchConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(taskUrl, fetchConfig);
      if (response.ok) {
        const taskData = await response.json();
        const userId = taskData.assignee;
        setTask(taskData);
        const userUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/users/${userId}`;
        const fetchUserConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const userResponse = await fetch(userUrl, fetchUserConfig);
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
        }
      } else {
        console.log("Error fetching task data");
      }
    }
    fetchTask();
  }, [id, token]);

  const deleteTask = async (id) => {
    const taskResponse = await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/tasks/${id}`, {
      method: "delete",
    });
    if (taskResponse.ok) {
      getTasks();
      navigate("/scrum-and-coke/boards");
    }
  };
  if (!task) {
    return <div>This task does not exist</div>;
  }

  return (
    <Card className="TaskDetailCard">
      <Card.Header className="CardTitleText">{task.title}</Card.Header>
      <Card.Body>
        <Card.Text className="CardDescriptionText">
          {task.description}
        </Card.Text>
        <Card.Text className="CardAssigneeText">
          Assignee: {user.full_name}
        </Card.Text>
        <Badge bg="light" className="BadgeStatusText">
          {task.status}
        </Badge>
      </Card.Body>
      <div>
        <Link to={`/scrum-and-coke/tasks/${id}/edit`}>
          <Button
            className="EditTaskButton"
            variant="outline-secondary"
            size="sm"
          >
            Edit Task
          </Button>
        </Link>
        <Button
          variant="outline-secondary"
          size="sm"
          className="DeleteTaskButton"
          onClick={() => deleteTask(task.id)}
        >
          Delete Task
        </Button>
      </div>
    </Card>
  );
}
