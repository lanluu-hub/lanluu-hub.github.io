import { Link } from "react-router";

function NotFound() {
  return (
    <section>
      <h2>Page not found.</h2>
      <p>
        <Link to="/">back to Home</Link>
      </p>
    </section>
  );
}

export default NotFound;
