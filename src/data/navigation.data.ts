import {
  Home,
  User,
  Zap,
  Briefcase,
  Award,
  BookOpen,
  Mail,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const navigationData: NavigationItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "experience", label: "Experience", icon: Award },
  { id: "education", label: "Education", icon: BookOpen },
  { id: "contact", label: "Contact", icon: Mail },
];
