import { useEffect } from "react";
import { useLocation } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { experiences } from "../data/experience";
import ExperienceItem from "../components/ExperienceItem";
import { skillGroups } from "../data/skills";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get("section");

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location]);

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
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={() => {
              document.getElementById("selected-work")?.scrollIntoView({
                behavior: "instant",
                block: "start",
              });
            }}
          >
            View My Work.
          </button>
        </section>

        <section
          className="py-5"
          aria-labelledby="selected-work-title"
          id="selected-work"
        >
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

        <section
          className="py-5"
          aria-labelledby="experience-title"
          id="experience"
        >
          <h2 id="experience-title">Experience</h2>

          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </section>

        <section className="py-5" aria-labelledby="skills-title">
          <h2 id="skills-title">Technical Skills</h2>
          <Row className="g-4">
            {skillGroups.map((skillGroup) => (
              <Col key={skillGroup.category} xs={12} md={6}>
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </section>

        <section className="py-5" aria-labelledby="about-title" id="about">
          <h2 id="about-title">About / Education</h2>
          <Row className="g-4">
            <Col xs={12} md={6}>
              <h3>About</h3>
              <p>
                I’m a Computer Science senior based in Portland, Oregon, focused
                on full-stack software development. Through my internship and
                capstone work, I’ve built applications independently and
                contributed to an existing team codebase. I also bring
                professional experience in semiconductor manufacturing.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <h3>Education</h3>
              <ul>
                <li>
                  <p>
                    <strong>Portland State University</strong> — B.S. Computer
                    Science, expected December 2026; <strong>GPA: 3.99</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Mt. Hood Community College</strong> — Associate of
                    Science Transfer in Computer Science, June 2024.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </section>

        <section className="py-5" aria-labelledby="contact-title" id="contact">
          <h2 id="contact-title">Contact</h2>
          <p>
            Interested in discussing a software development opportunity? Get in
            touch.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a href="mailto:lanluu@pdx.edu" className="btn btn-outline-light">
              Email
            </a>
            <a
              href="https://github.com/lanluu-hub"
              className="btn btn-outline-light"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lan-luu-4b341424a/"
              className="btn btn-outline-light"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Home;
