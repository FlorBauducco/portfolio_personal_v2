export interface Project {
  id: string;
  title: string;
  year: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  accent: "violet" | "blue" | "cyan" | "rose";
  liveUrl?: string;
  codeUrl?: string;
  challenges: string[];
  solutions: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: "visitasVirtuales",
    title: "Visitas Virtuales",
    year: "2026",
    summary:
      "Built a full-stack virtual tour platform for educational institutions, enabling prospective students to explore campuses and facilities through interactive 3D experiences.",
    description:
      "Developed a web application that combines React, Express, PostgreSQL, and Unity WebGL to deliver immersive virtual visits. The platform allows educational centers within the Davante group to showcase their spaces through interactive tours enriched with points of interest and dynamic content.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Unity", "C#"],
    image: "/projects/visitas-virtuales.png",
    accent: "blue",
    liveUrl: "https://visitasvirtuales.dedyn.io/    ",
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
  {
    id: "firstPortfolio",
    title: "My first Portfolio",
    year: "2026",
    summary:
      "A personal portfolio website built as my first frontend project to showcase my skills, projects, and journey as a web developer.",
    description:
      "This project is a responsive single-page portfolio developed with React. It was created as an introduction to frontend development, focusing on presenting my work, skills, and contact information in a clear and accessible way.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Custom Hooks"],
    image: "/projects/first-portfolio.png",
    accent: "violet",
    liveUrl: "https://portfolio-florencia-three.vercel.app/",
    codeUrl: "https://github.com/FlorBauducco/portfolio_florencia",
    challenges: [
      "Structuring my first React application from scratch.",
      "Designing a clean and responsive layout without prior experience.",
      " Organizing components and project sections effectively.",
      "Understanding deployment and hosting workflows",
    ],
    solutions: [
      "Broke the interface into reusable React components. Used a simple and consistent design approach to ensure usability.",
      "Focused on responsive design principles for different devices.",
      "Deployed the project using modern hosting tools to make it accessible online",
    ],
    learnings: [
      "First experience building with React.",
      "Learned component-based architecture and responsive design.",
      "Gained confidence in building and deploying real projects",
    ],
  },
];
