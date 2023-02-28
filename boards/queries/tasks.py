from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union, Optional


class Error(BaseModel):
    message: str


class StatusIn(BaseModel):
    status: str


class StatusOut(BaseModel):
    id: int
    status: str


class TaskIn(BaseModel):
    title: str
    description: str
    assignee: Optional[int]
    board: int
    status: str


class TaskOut(BaseModel):
    id: int
    title: str
    description: str
    assignee: Optional[int]
    board: int
    status: str


class StatusRepository:
    def get_all(self) -> Union[Error, List[StatusOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, status
                        FROM status
                        ORDER BY id

                        """
                    )
                    return [
                            StatusOut(
                            id=record[0],
                            status=record[1],
                            )
                            for record in result
                    ]

        except Exception as e:
            print(e)
            return {"message": "could not get statuses"}


class TaskRepository:
    def create(self, task: TaskIn) -> Union[Error,TaskOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO tasks
                        (title, description, assignee, board, status)
                        VALUES
                        (%s, %s, %s, %s, %s)
                        RETURNING id;
                        """,
                        [
                            task.title,
                            task.description,
                            task.assignee,
                            task.board,
                            task.status,
                        ]
                    )
                    id = result.fetchone()[0]
                    return self.task_in_to_out(id, task)

        except Exception:
            return {"message": "could not create task"}


    def get_all(self) -> Union[Error, List[TaskOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, title, description, assignee, board, status
                        FROM tasks
                        ORDER BY id

                        """
                    )
                    return [
                        self.record_to_task_out(record)
                        for record in result
                    ]

        except Exception as e:
            print(e)
            return {"message": "could not get all tasks"}


    def update(self, task_id: int, task: TaskIn) -> Union[Error, TaskOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE tasks
                        SET title = %s
                          , description = %s
                          , assignee = %s
                          , board = %s
                          , task.status = %s
                        WHERE id = %s
                        """,
                        [
                            task.title,
                            task.description,
                            task.assignee,
                            task.board,
                            task.status,
                            task_id
                        ]
                    )
                    return self.task_in_to_out(task_id, task)

        except Exception as e:
            print(e)
            return {"message": "could not update task"}


    def delete(self, task_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM tasks
                        WHERE id = %s
                        """,
                        [task_id]
                    )
                    return True

        except Exception:
            return False


    def get_one(self, task_id: int) -> Optional[TaskOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , title
                            , description
                            , assignee
                            , board
                            , status
                        FROM tasks
                        WHERE id = %s
                        """,
                        [task_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_task_out(record)

        except Exception as e:
            print(e)
            return {"message": "could not get that task"}


    def task_in_to_out(self, id: int, task: TaskIn):
        old_data = task.dict()
        return TaskOut(id=id, **old_data)


    def record_to_task_out(self, record):
        return TaskOut(
            id=record[0],
            title=record[1],
            description=record[2],
            assignee=record[3],
            board=record[4],
            status=record[5],
        )
