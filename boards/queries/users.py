from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union


class Error(BaseModel):
    message: str


class DuplicateUserError(ValueError):
    pass


class UserIn(BaseModel):
    email: str
    full_name: str
    password: str
    employee_number: int


class UserOut(BaseModel):
    id: int
    email: str
    full_name: str
    hashed_password: str
    employee_number: int


class UsersOutAll(BaseModel):
    users: List[UserOut]


class UserOutWithoutPassword(BaseModel):
    id: int
    email: str
    full_name: str
    employee_number: int


class UserRepository:
    def create(self, user: UserIn, hashed_password: str) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO users
                    (email, full_name, hashed_password, employee_number)
                    VALUES
                    (%s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        user.email,
                        user.full_name,
                        hashed_password,
                        user.employee_number,
                    ],
                )
                id = result.fetchone()[0]
                return UserOut(
                    id=id,
                    email=user.email,
                    full_name=user.full_name,
                    hashed_password=hashed_password,
                    employee_number=user.employee_number,
                )

    def get_all(self) -> Union[Error, UsersOutAll]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, email, full_name, hashed_password, employee_number
                        FROM users
                        ORDER BY id

                        """
                    )
                    return [
                        self.record_to_user_out(record) for record in result
                    ]

        except Exception as e:
            print(e)
            return {"message": "could not get all users"}

    def update(
        self, employee_number: int, user: UserIn, hashed_password: str
    ) -> Union[Error, UserOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE users
                        SET email = %s
                        , full_name = %s
                        , hashed_password = %s
                        WHERE employee_number = %s
                        RETURNING id, email, full_name, hashed_password, employee_number
                        """,
                        [
                            user.email,
                            user.full_name,
                            hashed_password,
                            employee_number,
                        ],
                    )
                    return self.user_in_to_out(employee_number, user)

        except Exception as e:
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
                        [user_id],
                    )
                    return True

        except Exception:
            return False

    def get_one(self, employee_number: int) -> UserOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , email
                            , full_name
                            , hashed_password
                            , employee_number
                        FROM users
                        WHERE employee_number = %s
                        """,
                        [employee_number],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_user_out(record)

        except Exception as e:
            print(e)
            return {"message": "could not get that user"}

    def user_in_to_out(self, employee_number: int, user: UserIn):
        old_data = user.dict()
        return UserOut(employee_number=employee_number, **old_data)

    def record_to_user_out(self, record):
        return {
            "id": record[0],
            "email": record[1],
            "full_name": record[2],
            "hashed_password": record[3],
            "employee_number": record[4],
        }
