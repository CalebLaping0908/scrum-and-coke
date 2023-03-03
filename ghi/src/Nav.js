import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
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
              <NavDropdown.Item href="/boards/detail">
                My Boards
              </NavDropdown.Item>
              <NavDropdown.Item href="/boards/new">
                Create Board
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="NavLink2" href="/users/logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// function Nav() {
//   return (
//     <div className="layout layout-nav-side">
//       <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
//         <div className="container-fluid">
//           <NavLink className="navbar-brand" to="/">
//             Scrum and Coke
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <div className="nav-item dropdown">
//                 <NavLink
//                   className="btn btn-secondary dropdown-toggle bg-secondary"
//                   to="#"
//                   role="button"
//                   id="dropdownMenuLink"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Boards
//                 </NavLink>
//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="dropdownMenuLink"
//                 >
//                   <li>
//                     <NavLink className="dropdown-item" to="/boards">
//                       List boards
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/boards/new">
//                       Create a new board
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/boards/detail">
//                       My Boards
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//               <div className="nav-item dropdown">
//                 <NavLink
//                   className="btn btn-secondary dropdown-toggle bg-secondary"
//                   to="#"
//                   role="button"
//                   id="dropdownMenuLink"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Tasks
//                 </NavLink>
//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="dropdownMenuLink"
//                 >
//                   <li>
//                     <NavLink className="dropdown-item" to="/tasks">
//                       List tasks
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/tasks/new">
//                       Create a new task
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//               <div className="nav-item dropdown">
//                 <NavLink
//                   className="btn btn-secondary dropdown-toggle bg-secondary"
//                   to="#"
//                   role="button"
//                   id="dropdownMenuLink"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Users
//                 </NavLink>
//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="dropdownMenuLink"
//                 >
//                   <li>
//                     <NavLink className="dropdown-item" to="/users">
//                       List users
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/users/new">
//                       Create a new user
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/users/login">
//                       Login
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/users/logout">
//                       Logout
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
// export default Nav;
