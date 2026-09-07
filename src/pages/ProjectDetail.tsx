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
    <main>
      <Container>
        <Link to="/">Back to Home</Link>
        <h1>{project.title}</h1>
        <p>{project.role}</p>
        <p>{project.summary}</p>
        <h2>Technologies</h2>
        <ul>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {project.repositoryUrl && (
          <a href={project.repositoryUrl}>View repository</a>
        )}
      </Container>
    </main>
  );
}

export default ProjectDetail;
