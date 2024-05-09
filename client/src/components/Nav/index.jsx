import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import images from "../../../public/images/CodeBloodedLogo_2.png";


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

//import { Dropdown } from 'react-bootstrap'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  // function showNavigation() {
  //   if (Auth.loggedIn()) {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/orderHistory">Order History</Link>
  //         </li>
  //         <li className="mx-1">
  //           {/* this is not using the Link component to logout or user and then refresh the application to the start */}
  //           <a href="/" onClick={() => Auth.logout()}>
  //             Logout
  //           </a>
  //         </li>
  //       </ul>
  //     );
  //   } else {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/signup">Signup</Link>
  //         </li>
  //         <li className="mx-1">
  //           <Link to="/login">Login</Link>
  //         </li>
  //       </ul>
  //     );
  //   }
  // }
  // return (
  //   <header classNameName="flex-row px-1">
  //     <h1>
  //       <Link to="/">
  //         <span role="img" aria-label="shopping bag">
  //           🛍️
  //         </span>
  //         -Code Blooded Inc.
  //       </Link>
  //     </h1>
  //     <Dropdown>
  //     <Dropdown.Toggle variant="success" id="dropdown-basic">
  //       Categories
  //     </Dropdown.Toggle>

  //     <Dropdown.Menu>
  //
  //     </Dropdown.Menu>
  //   </Dropdown>
  //     <nav>{showNavigation()}</nav>
  //   </header>
  // );
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
   
        <Navbar.Brand className="" href="#home">
          <img src={images} alt="CBlogo" />
        </Navbar.Brand>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
        <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/coffeemugs" href="#action/3.1">
                Coffee Mugs
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/t-shirts"href="#action/3.2">
                T-shirts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessories"href="#action/3.3">Accessories</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className="" href="#signup">
              Signup
            </Nav.Link>
            <Nav.Link className="" href="#link">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;




// <Dropdown.Item as={Link} to="/Sweatshirts">Sweatshirt</Dropdown.Item>
// //       <Dropdown.Item as={Link}>T-shirt</Dropdown.Item>
// //       <Dropdown.Item href="#">Hat</Dropdown.Item>

// return (
//   <Navbar expand="lg" className="bg-body-tertiary">
//     <Container>
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// );
