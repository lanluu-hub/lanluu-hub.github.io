import { Link, useParams } from "react-router";
import { projects } from "../data/projects";
import { Container } from "react-bootstrap";
import NotFound from "./NotFound";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <main className="project-detail">
      <Container className="project-detail__content">
        <Link to="/" className="d-inline-block mb-4">
          Back to Home
        </Link>
        <h1>{project.title}</h1>
        <p className="project-detail__role">{project.role}</p>
        <p className="lead">{project.summary}</p>
        {project.overview && (
          <section className="project-detail__section">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
        )}
        {project.contributions && project.contributions.length > 0 && (
          <section className="project-detail__section">
            <h2>My Contribution</h2>
            <ul>
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </section>
        )}
        {project.implementation && project.implementation?.length > 0 && (
          <section className="project-detail__section">
            <h2>Implementation</h2>
            {project.implementation.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </section>
        )}
        {project.challenges && project.challenges.length > 0 && (
          <section className="project-detail__section">
            <h2>Engineering Challenges</h2>
            {project.challenges.map((challenge) => (
              <div key={challenge.title} className="mb-4">
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>
            ))}
          </section>
        )}
        <section className="project-detail__section">
          <h2>Technologies</h2>
          <ul className="list-unstyled d-flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="project-detail__technology">
                {technology}
              </li>
            ))}
          </ul>
        </section>
        <section className="project-detail__section">
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              className="btn btn-outline-light mt-4"
            >
              View repository
            </a>
          )}
        </section>
      </Container>
    </main>
  );
}

export default ProjectDetail;
