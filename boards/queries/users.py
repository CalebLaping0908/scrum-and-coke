from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union

class Error(BaseModel):
    message: str


class UserIn(BaseModel):
    email: str
    full_name: str
    password: str
    employee_number: int

class UserOut(BaseModel):
    id: int
    email: str
    full_name: str
    password: str
    employee_number: int

class UserRepository:
    def get_all(self) -> Union[Error, List[UserOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, email, full_name, password, employee_number
                        FROM users
                        ORDER BY id

                        """
                    )
                    return [
                        UserOut(
                        id=record[0],
                        email=record[1],
                        full_name=record[2],
                        password=record[3],
                        employee_number=record[4]
                    )
                    for record in db
                    ]

        except Exception:
            return {"message": "could not get all users"}


    def create(self, user: UserIn) -> Union[Error,UserOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO users
                    (email, full_name, password, employee_number)
                    VALUES
                    (%s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        user.email,
                        user.full_name,
                        user.password,
                        user.employee_number
                    ]
                )
                id = result.fetchone()[0]
                old_data = user.dict()
                return UserOut(id=id, **old_data)
