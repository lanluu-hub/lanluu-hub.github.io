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
];
