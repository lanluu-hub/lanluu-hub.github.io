export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++", "C", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Vite", "React Router", "Bootstrap", "HTML/CSS"],
  },
  {
    category: "Backend & Databases",
    items: [
      "Node.js",
      "Express",
      "Hono",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    category: "Testing & Tools",
    items: [
      "Jest",
      "Supertest",
      "Vitest",
      "React Testing Library",
      "Git",
      "GitHub",
    ],
  },
];
