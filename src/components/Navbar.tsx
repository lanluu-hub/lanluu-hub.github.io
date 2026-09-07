import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header>
      <BootstrapNavbar data-bs-theme="dark">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            Lan Luu
          </BootstrapNavbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </header>
  );
};

export default Navbar;
