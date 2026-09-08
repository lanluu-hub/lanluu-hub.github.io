import type { Experience } from "../data/experience";

type ExperienceItemProps = {
  experience: Experience;
};

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="experience-item">
      <div>
        <h3>{experience.organization}</h3>
        <p>{experience.role}</p>
        <p>{experience.period}</p>
      </div>
      <ul>
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceItem;
