export interface EducationItem {
  id: string;
  title: string;
  org: string;
  // end: null = ongoing
  start: number;
  end: number | null;
  type: "degree" | "bootcamp" | "course" | "certification";
  description: string;
}

export const education: EducationItem[] = [
  {
    id: "davante-dam",
    title: "Higher Degree in Multiplatform Application Development",
    org: "Davante",
    start: 2024,
    end: 2026,
    type: "degree",
    description:
      "Comprehensive training in multiplatform software development, including Java, Spring Boot, databases, and web development.",
  },
  {
    id: "udemy-fullstack",
    title: "Full Stack Web Development Course",
    org: "Udemy",
    start: 2026,
    end: 2026,
    type: "course",
    description:
      "Training focused on full stack web development for real-world environments, including projects integrating frontend, backend, relational databases, and online payment systems.",
  },
  {
    id: "udemy-react-typescript",
    title: "React, TypeScript & Next JS",
    org: "Udemy",
    start: 2026,
    end: 2026,
    type: "course",
    description:
      "Training in React and TypeScript focused on real-world projects, including state management, authentication, testing, and full stack development with Node.js, Express, and databases.",
  },
];
