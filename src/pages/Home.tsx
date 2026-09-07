import { Link } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { experiences } from "../data/experience";
import ExperienceItem from "../components/ExperienceItem";

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

          <Row className="g-4">
            {projects.map((project) => (
              <Col
                key={project.slug}
                xs={12}
                lg={
                  project.slug === "idx-property-search"
                    ? 7
                    : project.slug === "volunteernet"
                      ? 5
                      : 6
                }
              >
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </section>

        <section className="py-5" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>

          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </section>
      </Container>
    </main>
  );
}

export default Home;
