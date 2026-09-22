
import {
  Code2,
  Palette,
  Database,
  Server,
  GitBranch,
  Smartphone,
} from "lucide-react";

const skills = [
  {
    id: 1,
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern, responsive interfaces with clean and reusable code.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },

  {
    id: 2,
    icon: Palette,
    title: "UI & Styling",
    description:
      "Creating clean and user-friendly interfaces with modern styling systems.",
    technologies: ["Tailwind CSS", "Responsive Design", "UI Design"],
  },

  {
    id: 3,
    icon: Server,
    title: "Backend Development",
    description:
      "Developing server-side applications and APIs for web platforms.",
    technologies: ["Python", "Django", "REST API"],
  },

  {
    id: 4,
    icon: Database,
    title: "Database",
    description:
      "Working with structured data and designing practical database solutions.",
    technologies: ["PostgreSQL", "SQLite", "Data Modeling"],
  },

  {
    id: 5,
    icon: GitBranch,
    title: "Tools & Workflow",
    description:
      "Using modern development tools to manage, build, and maintain projects.",
    technologies: ["Git", "GitHub", "VS Code"],
  },

  {
    id: 6,
    icon: Smartphone,
    title: "Responsive Development",
    description:
      "Making websites and applications work smoothly across different screen sizes.",
    technologies: ["Mobile First", "Responsive UI", "Accessibility"],
  },
];

export default skills;
