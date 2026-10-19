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
  icon: LucideIcon;
}

export const navigationData: NavigationItem[] = [
  { id: "home", icon: Home },
  { id: "about", icon: User },
  { id: "skills", icon: Zap },
  { id: "projects", icon: Briefcase },
  { id: "experience", icon: Award },
  { id: "education", icon: BookOpen },
  { id: "contact", icon: Mail },
];
