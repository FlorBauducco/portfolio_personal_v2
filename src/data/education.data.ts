export interface EducationItem {
  id: string;
  title: string;
  org: string;
  period: string;
  type: "Degree" | "Bootcamp" | "Course" | "Certification";
  description: string;
}

export const education: EducationItem[] = [
  {
    id: "edu-1",
    title: "Higher Degree in Multiplatform Application Development",
    org: "Davante",
    period: "2024 - 2026",
    type: "Degree",
    description:
      "Comprehensive training in multiplatform software development, including Java, Spring Boot, databases, and web development.",
  },
  {
    id: "edu-2",
    title: "Full Stack Web Development Course",
    org: "Udemy",
    period: "2026",
    type: "Course",
    description:
      "Training focused on full stack web development for real-world environments, including projects integrating frontend, backend, relational databases, and online payment systems.",
  },
  {
    id: "edu-3",
    title: "React, TypeScript & Next JS",
    org: "Udemy",
    period: "2026",
    type: "Course",
    description:
      "Training in React and TypeScript focused on real-world projects, including state management, authentication, testing, and full stack development with Node.js, Express, and databases.",
  },
];
