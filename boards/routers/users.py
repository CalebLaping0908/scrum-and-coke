from fastapi import APIRouter, Depends
from typing import List, Union
from queries.users import UserIn, UserRepository, UserOut, Error

router = APIRouter()

@router.post("/users", response_model=Union[UserOut, Error])
def create_user(
    user: UserIn,
    repo: UserRepository = Depends()
):
    return repo.create(user)


@router.get("/users", response_model=Union[Error, List[UserOut]])
def get_all(
    repo: UserRepository = Depends(),
    ):
    return repo.get_all()

@router.put("/users/{user_id}", response_model=Union[UserOut, Error])
def update_user(
    user_id: int,
    user: UserIn,
    repo: UserRepository = Depends(),
) -> Union[UserOut, Error]:
    return repo.update(user_id, user)
