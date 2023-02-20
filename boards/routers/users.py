from fastapi import APIRouter, Depends
from queries.users import UserIn, UserRepository, UserOut

router = APIRouter()

@router.post("/users", response_model=UserOut)
def create_user(
    user: UserIn,
    repo: UserRepository = Depends()
):
    return repo.create(user)
