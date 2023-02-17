from pydantic import BaseModel

class UserIn(BaseModel):
    email: str
    full_name: str
    password: str
    employee_number: int
