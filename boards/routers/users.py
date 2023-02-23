from fastapi import APIRouter, Depends, Response, HTTPException, Request, status
from typing import List, Union, Optional
from queries.users import UserIn, UserRepository, UserOut, Error, DuplicateUserError
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel

class UserForm(BaseModel):
    username: str
    password: str

class UserToken(Token):
    user: UserOut

class HttpError(BaseModel):
    detail: str

router = APIRouter()

@router.post("/users", response_model=UserToken | HttpError)
async def create_user(
    user: UserIn,
    request: Request,
    response: Response,
    repo: UserRepository = Depends(),
):
    hashed_password = authenticator.hash_password(user.password)
    try:
        account = repo.create(user, hashed_password)
    except DuplicateUserError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = UserForm(
        username=user.employee_number,
        password=user.password,
       )
    token = await authenticator.login(response, request, form, repo)
    return UserToken(user=account, **token.dict())

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


@router.delete("/users/{user_id}", response_model=bool)
def delete_user(
    user_id: int,
    repo: UserRepository = Depends(),
) -> bool:
    return repo.delete(user_id)


@router.get("/users/{user_id}", response_model=Optional[Union[Error, UserOut]])
def get_one_user(
    user_id: int,
    repo: UserRepository = Depends(),
) -> UserOut:
    user = repo.get_one(user_id)
    return user
