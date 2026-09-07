import { Container } from "react-bootstrap";
import { Link } from "react-router";

function NotFound() {
  return (
    <main className="not-found">
      <Container className="text-center">
        <p className="not-found__code">404</p>
        <h1>Page not found.</h1>
        <p className="not-found__message">
          “The page or project you’re looking for couldn’t be found.”
        </p>

        <Link to="/" className="btn btn-outline-light px-4 py-2">
          back to Home
        </Link>
      </Container>
    </main>
  );
}

export default NotFound;
