import { Link } from "react-router";
import { Container } from "react-bootstrap";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <main>
      <Container>
        <section aria-labelledby="hero-title">
          <h1 id="hero-title">Lan Luu</h1>
          <p>Software Developer | Computer Science Senior</p>
          <p>
            I build full-stack applications and software systems using React,
            Node.js, SQL, C++, and Python. Currently completing my B.S. in
            Computer Science at Portland State University, graduating December
            2026.
          </p>
          <Link
            to="/projects/idx-property-search"
            className="btn btn-outline-light"
          >
            View IDX project
          </Link>
        </section>
        <section className="py-5" aria-labelledby="selected-work-title">
          <h2 id="selected-work-title">Selected Work</h2>

          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </Container>
    </main>
  );
}

export default Home;
