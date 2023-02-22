from fastapi import APIRouter, Depends
from typing import List, Union, Optional
from queries.tasks import TaskIn, TaskRepository, TaskOut, Error

router = APIRouter()

@router.post("/tasks", response_model=Union[TaskOut, Error])
def create_task(
    task: TaskIn,
    repo: TaskRepository = Depends()
):
    return repo.create(task)


@router.get("/tasks", response_model=Union[Error, List[TaskOut]])
def get_all(
    repo: TaskRepository = Depends(),
    ):
    return repo.get_all()


@router.put("/tasks/{task_id}", response_model=Union[TaskOut, Error])
def update_task(
    task_id: int,
    task: TaskIn,
    repo: TaskRepository = Depends(),
) -> Union[TaskOut, Error]:
    return repo.update(task_id, task)


@router.delete("/tasks/{task_id}", response_model=bool)
def delete_task(
    task_id: int,
    repo: TaskRepository = Depends(),
) -> bool:
    return repo.delete(task_id)


@router.get("/tasks/{task_id}", response_model=Optional[Union[Error, TaskOut]])
def get_one_task(
    task_id: int,
    repo: TaskRepository = Depends(),
) -> TaskOut:
    task = repo.get_one(task_id)
    return task
