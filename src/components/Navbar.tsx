import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header>
      <BootstrapNavbar data-bs-theme="dark" expand="lg" collapseOnSelect>
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            Lan Luu
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="main-navigation" />
          <BootstrapNavbar.Collapse id="main-navigation">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" eventKey="home">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/?section=selected-work" eventKey="work">
                Work
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/?section=experience"
                eventKey="experience"
              >
                Experience
              </Nav.Link>

              <Nav.Link as={Link} to="/?section=about" eventKey="about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/?section=contact" eventKey="contact">
                Contact
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </header>
  );
};

export default Navbar;
