import React from "react";
import { useToken } from "../Auth";
import { useNavigate, Link } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";

export default function BoardList({ boards }) {
  const [token] = useToken();
  const navigate = useNavigate();

  if (!token) {
    navigate("/users/login");
  }
  if (boards.length === 0) {
    return (
      <>
        <br></br>
        <p className="NoBoardsText">You have no boards!</p>
        <div>
          <Link to="/boards/new" className="CreateBoardButton">
            <Button
              className="CreateBoardButton"
              variant="outline-light"
              size="lg"
            >
              Create Board
            </Button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <div className="container">
        <h1 className="BoardListTitle">My Boards</h1>
        <ListGroup className="BoardList" variant="flush">
          {boards.map((board) => {
            return (
              <tr key={board.id}>
                <Link className="BoardLink" to={`/boards/${board.id}`}>
                  <ListGroup.Item className="BoardListItem custom-bg-transparent">
                    {board.name}
                  </ListGroup.Item>
                </Link>
              </tr>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}
