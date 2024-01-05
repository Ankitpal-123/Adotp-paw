import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <Navbar expand="lg" style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.06)" }}>
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ADOPT A PAW
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ textDecoration: "none" }}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/history"
              style={{ textDecoration: "none" }}
            >
              History
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ textDecoration: "none" }}>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
