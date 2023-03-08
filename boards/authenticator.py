import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.users import UserRepository, UserOut


class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        employee_number: int,
        repo: UserRepository,
    ):
        return repo.get_one(employee_number)

    def get_account_getter(
        self,
        repo: UserRepository = Depends(),
    ):
        return repo

    def get_hashed_password(self, user: UserOut):
        return user["hashed_password"]


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
