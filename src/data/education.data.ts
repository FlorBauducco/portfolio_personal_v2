export interface EducationItem {
  id: string;
  org: string;
  // end: null = ongoing
  start: number;
  end: number | null;
  type: "degree" | "bootcamp" | "course" | "certification";
}

export const education: EducationItem[] = [
  {
    id: "davante-dam",
    org: "Davante",
    start: 2024,
    end: 2026,
    type: "degree",
  },
  {
    id: "udemy-fullstack",
    org: "Udemy",
    start: 2026,
    end: 2026,
    type: "course",
  },
  {
    id: "udemy-react-typescript",
    org: "Udemy",
    start: 2026,
    end: 2026,
    type: "course",
  },
];
