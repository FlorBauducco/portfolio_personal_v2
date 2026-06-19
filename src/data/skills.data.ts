import {
  Code2,
  Terminal,
  Layers,
  AppWindow,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiGnubash,
  SiNpm,
  SiPnpm,
  SiVite,
  SiNotion,
  SiSlack,
  SiDiscord,
  SiFigma,
  SiJira,
  SiClaude,
  SiOpenai,
} from "react-icons/si";
import { VscVscode, VscTerminal } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: "violet" | "blue" | "cyan";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "dev-env",
    title: "Development Environment",
    subtitle: "Where the work happens",
    icon: Code2,
    accent: "violet",
    skills: [
      { name: "VS Code", icon: VscVscode, color: "#0098FF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#E5E7EB" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    id: "cli",
    title: "CLI",
    subtitle: "Keyboard first",
    icon: Terminal,
    accent: "blue",
    skills: [
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { name: "Terminal", icon: VscTerminal, color: "#E5E7EB" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
      { name: "pnpm", icon: SiPnpm, color: "#F69220" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    id: "stack",
    title: "Tech Stack",
    subtitle: "Frontend · Backend · Database",
    icon: Layers,
    accent: "cyan",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#E5E7EB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    id: "daily",
    title: "Daily Apps",
    subtitle: "Collaboration & flow",
    icon: AppWindow,
    accent: "violet",
    skills: [
      { name: "Notion", icon: SiNotion, color: "#E5E7EB" },
      { name: "Slack", icon: SiSlack, color: "#4A154B" },
      { name: "Discord", icon: SiDiscord, color: "#5865F2" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Claude", icon: SiClaude, color: "#F24E1E" },
      { name: "ChatGPT", icon: SiOpenai, color: "#E5E7EB" },
    ],
  },
];
