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
                return self.board_in_to_out(id, board)

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

    def update(self, board_id: int, board: BoardIn) -> Union[Error, BoardOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE boards
                        SET name = %s
                        WHERE id = %s
                        """,
                        [
                            board.name,
                            board_id
                        ]
                    )
                    return self.board_in_to_out(board_id, board)

        except Exception:
            return {"message": "could not update board"}

    def delete(self, board_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM boards
                        WHERE id = %s
                        """,
                        [board_id]
                    )
                    return True

        except Exception:
            return False


    def board_in_to_out(self, id: int, board: BoardIn):
        old_data = board.dict()
        return BoardOut(id=id, **old_data)
