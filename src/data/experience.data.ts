export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  // end: null = ongoing
  start: number;
  end: number | null;
  description: string;
  tech?: string[];
}
export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    role: "Freelance Developer",
    company: "Freelance",
    start: 2026,
    end: null,
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
    start: 2026,
    end: 2026,
    description:
      "Developed a virtual tour platform for educational centers with React, TypeScript and Unity (C#), with agile methodologies and teamwork.",
    tech: ["React", "TypeScript", "Docker", "Unity", "C#", "GitHub", "Jira"],
  },
  {
    id: "apex-america",
    role: "Technical Support Specialist, FTTH & mobile",
    company: "Apex America",
    start: 2019,
    end: 2021,
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
