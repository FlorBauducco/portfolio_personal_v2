export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  tech?: string[];
  achievements: string[];
}
export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Junior Fullstack Developer",
    company: "Zaitec",
    period: "mar 2026 - Jun 2026",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Unity", "C#"],
    achievements: [
      "Developed interactive features and application logic in Unity using C#.",
      "Designed and implemented a custom Point of Interest (POI) Editor to improve content management workflows.",
      "Integrated Unity applications with web-based systems and services.",
      "Contributed to frontend development using React.",
      "Collaborated in an Agile environment using Jira and GitHub for project management and version control.",
      "Worked closely with a distributed development team in a remote collaborative environment.",
    ],
  },
  {
    id: "exp-2",
    role: "Technical Support Specialist, FTTH & mobile",
    company: "Apex America ",
    period: "Jul 2019 - Dec 2021",
    tech: [
      "Remedy",
      "Jira",
      "Ticketing",
      "Cisco",
      "Troubleshooting apps",
      "Excel",
    ],
    achievements: [
      "Diagnosed and resolved network, software, mobile device, and FTTH connectivity issues.",
      "Managed and tracked technical incidents using Jira, and Remedy ticketing systems.",
      "Performed structured troubleshooting and escalation to N2 support teams.",
      "Strengthened analytical thinking, technical documentation, and problem-solving skills in a service-oriented environment.",
    ],
  },
  {
    id: "exp-3",
    role: "Patient Administration & Customer Service",
    company: "Oximesa - Nippon Sanso",
    period: "nov 2024 - current",
    tech: ["Dynamic 360", "AS400", "Excel"],
    achievements: [
      "Managed patient data and records using AS400 and Dynamics 365, ensuring data accuracy and traceability.",
      "Handled high-volume incidents, requests, and back-office operations through corporate CRM systems.",
      "Developed strong communication, organization, and problem-solving skills in a fast-paced corporate environment.",
    ],
  },
];
