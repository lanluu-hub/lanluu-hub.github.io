import { Link } from "react-router";

function NotFound() {
  return (
    <main>
      <h1>Page not found.</h1>
      <p>
        <Link to="/">back to Home</Link>
      </p>
    </main>
  );
}

export default NotFound;
