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
                return self.user_in_to_out(id, user)


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


    def update(self, user_id: int, user: UserIn) -> Union[Error, UserOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE users
                        SET email = %s
                        , full_name = %s
                        , password = %s
                        , employee_number = %s
                        WHERE id = %s
                        """,
                        [
                            user.email,
                            user.full_name,
                            user.password,
                            user.employee_number,
                            user_id
                        ]
                    )
                    return self.user_in_to_out(user_id, user)

        except Exception:
            return {"message": "could not update user"}


    def delete(self, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM users
                        WHERE id = %s
                        """,
                        [user_id]
                    )
                    return True

        except Exception:
            return False


    def user_in_to_out(self, id: int, user: UserIn):
        old_data = user.dict()
        return UserOut(id=id, **old_data)
