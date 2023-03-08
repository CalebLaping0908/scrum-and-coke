from fastapi.testclient import TestClient
from main import app
from queries.users import UserRepository


client = TestClient(app)

class EmptyUserQueries:
    def get_all(self):
        return []
    
    def delete(self, id):
        return True

class CreateUserQueries:
    def create(self, user):
        result = {
            "id": 1,
            "email": "test@mctester.com",
            "full_name": "Test McTesterson",
            "password": "SuperSecret123!",
            "employee_number": 1
        }
        result.update(user)
        return result
    
    def delete(self, id):
        result = True
        return result



def test_get_all_users():

    app.dependency_overrides[UserRepository] = EmptyUserQueries

    response = client.get("/users")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == {"users":[]}


def test_delete_user():
    app.dependency_overrides[UserRepository] = EmptyUserQueries

    response = client.delete("/users/1")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == True



