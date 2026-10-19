export interface ExperienceItem {
  id: string;
  company: string;
  // end: null = ongoing
  start: number;
  end: number | null;
  tech?: string[];
}
export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    company: "Freelance",
    start: 2026,
    end: null,
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
    company: "Master D",
    start: 2026,
    end: 2026,
    tech: ["React", "TypeScript", "Docker", "Unity", "C#", "GitHub", "Jira"],
  },
  {
    id: "apex-america",
    company: "Apex America",
    start: 2019,
    end: 2021,
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
