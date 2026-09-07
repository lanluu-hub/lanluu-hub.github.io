export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  technologies: string[];
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "idx-property-search",
    title: "IDX Exchange Property Search",
    summary:
      "An MLS-style property search application with multi-criteria filtering, server-side pagination, and property detail views.",
    role: "Individual full-stack project · Software Development Engineer Intern",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MySQL"],
    repositoryUrl: "https://github.com/lanluu-hub/IDX_summer_26_project",
  },
  {
    slug: "volunteernet",
    title: "VolunteerNet.org",
    summary:
      "Extended admin request management to show assigned volunteer names and matched client/volunteer contact information, working within the existing role-aware/RLS architecture.",
    role: "Software Developer · PSU Capstone team project",
    technologies: ["React", "TypeScript", "Hono", "PostgreSQL"],
  },
  {
    slug: "chocan",
    title: "ChocAn Data Center",
    summary:
      "Contributed the central application integration layer, domain models, terminal workflows, and initial SQLite integration to a team-built data center application.",
    role: "Team software engineering project",
    technologies: ["C++", "Make", "HonoSQLite"],
    repositoryUrl: "https://github.com/lanluu-hub/ChocAn_Data_Center",
  },
  {
    slug: "string-interpreter",
    title: "String DSL Interpreter",
    summary:
      "A tree-walking interpreter supporting lexical scoping, recursion, closures, runtime type checking, and string-oriented DSL operations.",
    role: "Interpreter project",
    technologies: ["Python", "Lark"],
    repositoryUrl: "https://github.com/lanluu-hub/cs358_project_interp",
  },
];
