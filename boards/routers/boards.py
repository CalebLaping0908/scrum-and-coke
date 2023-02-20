from fastapi import APIRouter, Depends
from typing import List, Union
from queries.boards import BoardIn, BoardRepository, BoardOut, Error

router = APIRouter()

@router.post("/boards", response_model=Union[BoardOut, Error])
def create_board(
    board: BoardIn,
    repo: BoardRepository = Depends()
):
    return repo.create(board)

@router.get("/boards", response_model=Union[Error, List[BoardOut]])
def get_all(
    repo: BoardRepository = Depends(),
    ):
    return repo.get_all()
