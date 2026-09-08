export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  technologies: string[];
  repositoryUrl?: string;
  overview?: string;
  contributions?: string[];
  implementation?: string[];
  challenges?: {
    title: string;
    description: string;
  }[];
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
    overview:
      "Built an individual full-stack MLS-style property search application during my IDX Exchange internship. Users can filter and sort listings, navigate paginated results, and explore property details, photos, open-house information, and embedded maps.",
    contributions: [
      "Built the React interface for property search and detail views, including loading, error, and empty states.",
      "Implemented Express endpoints backed by parameterized MySQL queries, input validation, allowlisted sorting, and server-side pagination.",
      "Added stale-request protection so older responses could not overwrite newer search results.",
      "Developed 37 backend and 31 frontend automated tests; backend tests used a mocked database.",
    ],
    implementation: [
      "The React frontend communicates with an Express API backed by MySQL. The API supports property search, property details, and open-house information.",
      "Search queries use parameterized values and allowlisted sorting. The server calculates the total result count and uses LIMIT/OFFSET to return a page of matching properties.",
    ],
    challenges: [
      {
        title: "Keeping search results current",
        description:
          "Search requests can finish out of order. Stale-request protection prevents older responses from replacing results from a newer request.",
      },
      {
        title: "Handling dynamic search safely",
        description:
          "Search combines multiple optional filters and user-selected sorting. Input validation, parameterized queries, and allowlisted sort options constrain how user input affects database queries.",
      },
    ],
  },
  {
    slug: "volunteernet",
    title: "VolunteerNet.org",
    summary:
      "Extended admin request management to show assigned volunteer names and matched client/volunteer contact information, working within the existing role-aware/RLS architecture.",
    role: "Software Developer · PSU Capstone team project",
    technologies: ["React", "TypeScript", "Hono", "PostgreSQL"],
    overview:
      "Contributed to an existing volunteer coordination application as part of a PSU capstone team. My work focused on giving administrators clearer access to assignment and contact information for matched requests.",
    contributions: [
      "Enabled admins to see assigned volunteer names on matched requests.",
      "Extended request-detail API behavior to expose matched client and volunteer contact information to admins.",
      "Implemented admin-specific PostgreSQL query paths while preserving the existing role-aware/RLS architecture.",
      "Delivered frontend, API, and database-layer changes through feature branches and merged pull requests.",
    ],
    implementation: [
      "The existing application uses React and TypeScript, a Hono API, and PostgreSQL. My changes extended its existing request-management functionality across these layers.",
    ],
    challenges: [
      {
        title: "Working within existing access controls",
        description:
          "The additional admin information needed to fit the application’s existing access model. I implemented admin-specific query paths while preserving the existing role-aware/RLS architecture.",
      },
    ],
  },
  {
    slug: "chocan",
    title: "ChocAn Data Center",
    summary:
      "Contributed the central application integration layer, domain models, terminal workflows, and initial SQLite integration to a team-built data center application.",
    role: "Team software engineering project",
    technologies: ["C++", "Make", "SQLite"],
    repositoryUrl: "https://github.com/lanluu-hub/ChocAn_Data_Center",
    overview:
      "A team software engineering project implemented in C++ with SQLite. My work focused on application integration, domain models, and terminal workflows.",
    contributions: [
      "Implemented the central ChocAnSystem application integration layer.",
      "Developed the Member, Provider, and Service domain models.",
      "Implemented Manager and Provider terminal workflows and substantial portions of the Operator terminal.",
      "Contributed initial SQLite integration.",
      "Integrated provider-directory display, formatting, and output.",
    ],
    implementation: [
      "The application uses C++, SQLite, and Make. My contributions connected terminal workflows, domain models, and the central application integration layer.",
    ],
  },
  {
    slug: "string-interpreter",
    title: "String DSL Interpreter",
    summary:
      "A tree-walking interpreter supporting lexical scoping, recursion, closures, runtime type checking, and string-oriented DSL operations.",
    role: "Interpreter project",
    technologies: ["Python", "Lark"],
    repositoryUrl: "https://github.com/lanluu-hub/cs358_project_interp",
    overview:
      "A tree-walking interpreter built with Python and Lark for a string-oriented domain-specific language. The language supports arithmetic, Boolean logic, conditionals, lexical scoping, recursion, closures, and runtime type checking.",
    implementation: [
      "The implementation includes a parser and grammar, AST transformations, and tree-walking evaluation.",
      "Language features combine string-oriented operations with control flow, scoped variables, and recursive functions.",
    ],
  },
];
