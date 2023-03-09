import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useToken } from "./Auth";

export default function NavBar() {
  const [token] = useToken();

  if (token) {
    return (
      <Navbar className="Navigation" bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand className="HomeButton" href="/">
            Scrum & Coke
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                className="NavLink"
                title="Boards"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/boards">My Boards</NavDropdown.Item>
                <NavDropdown.Item href="/boards/new">
                  Create Board
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="NavLink2" href="/scrum-and-coke/users/logout">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
