import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Java", level: "comfortable" },
      { name: "JavaScript", level: "comfortable" },
      { name: "TypeScript", level: "learning" },
      { name: "Python", level: "familiar" },
      { name: "C", level: "familiar" },
      { name: "C#", level: "familiar" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "layout",
    skills: [
      { name: "React", level: "comfortable" },
      { name: "Next.js", level: "learning" },
      { name: "HTML5", level: "comfortable" },
      { name: "CSS3", level: "comfortable" },
      { name: "Tailwind CSS", level: "comfortable" },
      { name: "React Native", level: "familiar" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "server",
    skills: [
      { name: "Node.js", level: "comfortable" },
      { name: "Express.js", level: "comfortable" },
      { name: "Spring Boot", level: "familiar" },
      { name: "ASP.NET Core", level: "familiar" },
      { name: "Jakarta EE", level: "familiar" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "database",
    skills: [
      { name: "MongoDB", level: "comfortable" },
      { name: "MySQL", level: "comfortable" },
      { name: "PostgreSQL", level: "familiar" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: "smartphone",
    skills: [
      { name: "React Native", level: "familiar" },
      { name: "Expo", level: "familiar" },
      { name: "Flutter", level: "familiar" }
    ]
  },
  {
    id: "tools",
    title: "Development Tools",
    icon: "wrench",
    skills: [
      { name: "Git", level: "comfortable" },
      { name: "GitHub", level: "comfortable" },
      { name: "VS Code", level: "comfortable" },
      { name: "IntelliJ IDEA", level: "familiar" },
      { name: "Postman", level: "comfortable" },
      { name: "Jira", level: "familiar" }
    ]
  },
  {
    id: "concepts",
    title: "Software Engineering Concepts",
    icon: "blocks",
    skills: [
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Data Structures & Algorithms" },
      { name: "RESTful API Design" },
      { name: "MVC Architecture" },
      { name: "Database Design & Normalization" },
      { name: "Agile & Scrum Methodologies" },
      { name: "Software Architecture" },
      { name: "Software Testing & QA" },
      { name: "CI/CD Fundamentals" }
    ]
  }
];
