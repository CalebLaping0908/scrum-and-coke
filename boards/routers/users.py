from fastapi import (
    APIRouter,
    Depends,
    Response,
    HTTPException,
    Request,
    status,
)
from typing import Union, Optional
from queries.users import (
    UserIn,
    UserRepository,
    UserOut,
    UserOutWithoutPassword,
    Error,
    DuplicateUserError,
    UsersOutAll,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel


class UserForm(BaseModel):
    username: str
    password: str


class UserToken(Token):
    user: UserOut


class UserTokenWithoutPassword(Token):
    user: UserOutWithoutPassword


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


@router.get("/users", response_model=Union[Error, UsersOutAll])
def get_all(
    repo: UserRepository = Depends(),
):
    return {"users": repo.get_all()}


@router.put("/users/{employee_number}")
async def update_user(
    employee_number: int,
    user: UserIn,
    response: Response,
    repo: UserRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    hashed_password = authenticator.hash_password(user.password)
    if account_data:
        return repo.update(employee_number, user, hashed_password)
    else:
        response.status_code = 404


@router.delete("/users/{employee_number}", response_model=bool)
def delete_user(
    employee_number: int,
    repo: UserRepository = Depends(),
) -> bool:
    return repo.delete(employee_number)


@router.get("/users/{employee_number}", response_model=Optional[Union[Error, UserOut]])
def get_one_user(
    employee_number: int,
    repo: UserRepository = Depends(),
) -> UserOut:
    user = repo.get_one(employee_number)
    return user


@router.get("/token", response_model=UserTokenWithoutPassword | None)
async def get_token(
    request: Request,
    user: UserOutWithoutPassword = Depends(
        authenticator.try_get_current_account_data
    ),
) -> UserTokenWithoutPassword | None:
    if user and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "user": user,
        }
