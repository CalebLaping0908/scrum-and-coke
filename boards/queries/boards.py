from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union

class Error(BaseModel):
    message: str

class BoardIn(BaseModel):
    name: str

class BoardOut(BaseModel):
    id: int
    name: str

class BoardRepository:
    def create(self, board: BoardIn) -> Union[Error,BoardOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO boards
                    (name)
                    VALUES
                    (%s)
                    RETURNING id;
                    """,
                    [
                        board.name,
                    ]
                )
                id = result.fetchone()[0]
                old_data = board.dict()
                return BoardOut(id=id, **old_data)

    def get_all(self) -> Union[Error, List[BoardOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, name
                        FROM boards
                        ORDER BY id

                        """
                    )
                    return [
                        BoardOut(
                        id=record[0],
                        name=record[1]
                    )
                    for record in db
                    ]

        except Exception:
            return {"message": "could not get all boards"}
