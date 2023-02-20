from fastapi import APIRouter, Depends, Response
from typing import Union
from queries.users import UserIn, UserRepository, UserOut, Error

router = APIRouter()

@router.post("/users", response_model=Union[UserOut, Error])
def create_user(
    user: UserIn,
    response: Response,
    repo: UserRepository = Depends()
):
    response.status_code = 400
    return repo.create(user)
