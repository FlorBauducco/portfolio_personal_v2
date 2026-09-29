export interface Project {
  id: string;
  title: string;
  year: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  accent: "violet" | "blue" | "cyan" | "rose";
  category: "professional" | "training";
  liveUrl?: string;
  codeUrl?: string;
  challenges: string[];
  solutions: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: "visitas-virtuales",
    title: "Visitas Virtuales",
    year: "2026",
    summary:
      "Built a full-stack virtual tour platform for educational institutions, enabling prospective students to explore campuses and facilities through interactive 3D experiences.",
    description:
      "Developed a web application that combines React, Express, PostgreSQL, and Unity WebGL to deliver immersive virtual visits. The platform allows educational centers within the Davante group to showcase their spaces through interactive tours enriched with points of interest and dynamic content.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Unity", "C#"],
    image: "/projects/visitas-virtuales.png",
    accent: "blue",
    category: "professional",
    codeUrl: "https://github.com/jaimemoya-bit/VisitasVirtualesZaitec",
    challenges: [
      "Integrating Unity WebGL with a modern React application.",
      "Managing communication between the frontend, backend, and 3D environment.",
      "Handling media assets and tour data efficiently while maintaining performance.",
    ],
    solutions: [
      "Implemented a scalable full-stack architecture using React, Express, PostgreSQL, and MinIO.",
      "Built a communication bridge between React and Unity to synchronize data and interactions. ",
      "Structured the application with reusable components and API-driven content management.",
    ],
    learnings: [
      "Gained hands-on experience integrating Unity WebGL into a production web application.",
      "Improved my understanding of full-stack architecture, API design, and media management.",
      "Learned how to balance technical complexity with an intuitive user experience for educational audiences.",
    ],
  },
];
