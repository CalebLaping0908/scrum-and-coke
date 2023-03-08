from fastapi.testclient import TestClient
from main import app
from queries.boards import BoardRepository

client = TestClient(app)

class EmptyBoardQueries:
    def get_all(self):
        return []

class CreateBoardQueries:
    def create(self, board):
        result = {
            "id": 1,
            "name": "My board",
        }
        result.update(board)
        return result


def test_get_all_boards():

    app.dependency_overrides[BoardRepository] = EmptyBoardQueries

    response = client.get("/boards")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == {"boards":[]}


def test_create_board():

    app.dependency_overrides[BoardRepository] = CreateBoardQueries

    json = {
        "name": "My board"
    }

    expected = {
        "id": 1,
        "name": "My board"
    }

    response = client.post("/boards", json=json)

    app.dependency_overrides = {}

    assert response.status_code == 200

    assert response.json() == expected

# Comment to make new merge 1
