export type Experience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "1",
    organization: "IDX Exchange",
    role: "Software Development Engineer Intern",
    period: "June 2026 – September 2026",
    highlights: [
      "Built an individual full-stack property search application using React, Express, and MySQL.",
      "Implemented validated filtering, allowlisted sorting, and server-side pagination.",
      "Developed 68 automated tests across backend and frontend; backend tests used a mocked database.",
    ],
  },
  {
    id: "2",
    organization: "VolunteerNet.org / North Plains Volunteer Network",
    role: "Software Developer, PSU Capstone",
    period: "Summer 2026 – Fall 2026",
    highlights: [
      "Extended admin request management across React, Hono API, and PostgreSQL layers.",
      "Enabled access to assigned volunteer names and matched contact information within the existing role-aware/RLS architecture.",
      "Delivered changes through feature branches and merged pull requests.",
    ],
  },
];
