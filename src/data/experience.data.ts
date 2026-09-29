export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech?: string[];
}
export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    role: "Freelance Developer",
    company: "Freelance",
    period: "2026 – Present",
    description:
      "Designing and building custom websites for small businesses and independent clients, such as Altivia Tattoo.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Cloudinary",
      "Cloudflare",
      "Resend",
      "GitHub",
    ],
  },
  {
    id: "master-d",
    role: "Full Stack Developer Trainee",
    company: "Master D",
    period: "2026",
    description:
      "Developed a virtual tour platform for educational centers with React, TypeScript and Unity (C#), with agile methodologies and teamwork.",
    tech: ["React", "TypeScript", "Docker", "Unity", "C#", "GitHub", "Jira"],
  },
  {
    id: "apex-america",
    role: "Technical Support Specialist, FTTH & mobile",
    company: "Apex America",
    period: "2019 – 2021",
    description:
      "Diagnosed and resolved network, mobile and FTTH connectivity issues, managing incidents through Jira and Remedy.",
    tech: [
      "Remedy",
      "Jira",
      "Ticketing",
      "Cisco",
      "Troubleshooting apps",
      "Excel",
    ],
  },
];
