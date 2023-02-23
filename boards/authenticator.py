import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.users import UserRepository, UserOut, Error


class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        employee_number: int,
        repo: UserRepository,
    ):
        # Use your repo to get the account based on the
        # username (which could be an email)
        return repo.get_one(employee_number)

    def get_account_getter(
        self,
        repo: UserRepository = Depends(),
    ):
        # Return the accounts. That's it.
        return repo

    def get_hashed_password(self, user: UserOut):
        # Return the encrypted password value from your
        # account object
        return user["hashed_password"]

    # def get_account_data_for_cookie(self, user: UserOut):
    #     # Return the username and the data for the cookie.
    #     # You must return TWO values from this method.
    #     return user.employee_number, UserOut(**user.dict())


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
