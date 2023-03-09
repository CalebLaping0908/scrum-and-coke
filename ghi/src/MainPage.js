import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useToken } from "./Auth";

function MainPage() {
  const [token] = useToken();

  if (token) {
    return (
      <div className="MainPageText">
        <h1 className="MainPageTitle">Scrum & Coke</h1>
        <div className="Wrapper">
          <p className="Slogan">
            Welcome to your ideal solution for team and task management.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="MainPageText">
        <h1 className="MainPageTitle">Scrum & Coke</h1>
        <div className="Wrapper">
          <p className="Slogan">
            Welcome to your ideal solution for team and task management.
          </p>
        </div>
        <div className="MainPageButtons">
          <Link to="/scrum-and-coke/users/new">
            <Button className="Signup" variant="outline-light" size="lg">
              Sign up
            </Button>
          </Link>
          <Link to="/scrum-and-coke/users/login">
            <Button className="Login" variant="outline-light" size="lg">
              Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
