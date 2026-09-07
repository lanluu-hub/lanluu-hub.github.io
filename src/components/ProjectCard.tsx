import type { Project } from "../data/projects";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card as="article" data-bs-theme="dark">
      <Card.Body>
        <Card.Title as="h3">{project.title}</Card.Title>
        <p>{project.role}</p>
        <Card.Text>{project.summary}</Card.Text>
        <Link to={`/projects/${project.slug}`}>View project</Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
