export interface Project {
  id: string;
  title: string;
  year: string;
  tech: string[];
  image: string;
  accent: "violet" | "blue" | "cyan" | "rose";
  category: "professional" | "training";
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: "visitas-virtuales",
    title: "Visitas Virtuales",
    year: "2026",
    tech: ["React", "TypeScript", "Docker", "Unity", "C#"],
    image: "/projects/visitas-virtuales.png",
    accent: "blue",
    category: "professional",
    codeUrl: "https://github.com/jaimemoya-bit/VisitasVirtualesZaitec",
  },
];
