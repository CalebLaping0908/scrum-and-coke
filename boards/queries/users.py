from pydantic import BaseModel
from queries.pool import pool


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
    def create(self, user: UserIn) -> UserOut:
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
