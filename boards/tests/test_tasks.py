from fastapi.testclient import TestClient
from main import app
from queries.tasks import TaskRepository

client = TestClient(app)


class EmptyTaskQueries:
    def get_all(self):
        return []


class CreateTaskQueries:
    def create(self, task):
        result = {
            "id": 1,
            "title": "Cool task",
            "description": "a really cool task with stuff on it",
            "assignee": 1,
            "board": 1,
            "status": "Backlog",
        }
        result.update(task)
        return result


def test_get_all_tasks():

    app.dependency_overrides[TaskRepository] = EmptyTaskQueries

    response = client.get("/tasks")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == []


def test_create_task():

    app.dependency_overrides[TaskRepository] = CreateTaskQueries

    json = {
        "title": "Cool task",
        "description": "a really cool task with stuff on it",
        "assignee": 1,
        "board": 1,
        "status": "Backlog",
    }

    expected = {
        "id": 1,
        "title": "Cool task",
        "description": "a really cool task with stuff on it",
        "assignee": 1,
        "board": 1,
        "status": "Backlog",
    }

    response = client.post("/tasks", json=json)

    app.dependency_overrides = {}

    assert response.status_code == 200

    assert response.json() == expected


class UpdateTaskQueries:
    tasks = [{
        "id": 1,
        "title": "Cool task",
        "description": "a really cool task with stuff on it",
        "assignee": 1,
        "board": 1,
        "status": "Backlog",
    }]

    def edit(self, task_id, updated_fields):
        for task in self.tasks:
            if task["id"] == task_id:
                task.update(updated_fields)
                return task
        return None


def test_update_task():

    app.dependency_overrides[TaskRepository] = UpdateTaskQueries

    task_id = 1

    updated_fields = {
        "title": "Updated task",
        "description": "an updated task with new stuff on it",
        "assignee": 2,
        "board": 2,
        "status": "In Progress",
    }

    expected = {
        "id": 1,
        "title": "Updated task",
        "description": "an updated task with new stuff on it",
        "assignee": 2,
        "board": 2,
        "status": "In Progress",
    }

    response = client.put(f"/tasks/{task_id}", json=updated_fields)

    app.dependency_overrides = {}

    assert response.status_code == 200

    assert response.json() == expected
