import { Link } from "react-router";

function Home() {
  return (
    <main>
      <h1>Lan Luu</h1>
      <p>Software Developer | Computer Science Senior</p>
      <Link to="/projects/idx-property-search">View IDX project</Link>
    </main>
  );
}

export default Home;
