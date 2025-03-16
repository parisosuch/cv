"use client";

import { Github } from "lucide-react";
import { Badge } from "./ui/badge";

let projects = [
  {
    name: "QCpy",
    description:
      "Open source quantum computing Python library. Team invited to SIGCSE 2023 to present project.",
    url: "https://github.com/QCpython/QCpy",
    tags: ["Python", "Numpy", "Quantum Computing", "OSS", "Research"],
  },
  {
    name: "CV",
    description:
      "Quick and clean CV website. What you are currently looking at right now.",
    url: "https://github.com/parisosuch-dev/cv",
    tags: ["NextJS", "Tailwind", "Vercel", "Shadcn"],
  },
  {
    name: "Roseville Open Budget",
    description: "Dashboard that displays Roseville, CA expenses and revenues.",
    url: "https://github.com/parisosuch-dev/roseville-open-budget",
    tags: ["NextJS", "Tailwind", "Vercel", "Supabase", "Postgres"],
  },
];

export default function Projects() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">Projects</h1>
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="space-y-2 border-2 border-gray-200 shadow-sm rounded-md p-2"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <h2 className="font-semibold text-sm sm:text-lg hover:underline">
                {project.name}
              </h2>
              <a href={project.url} target="_blank">
                <Github size={18} />
              </a>
            </div>
            <p className="text-xs font-mono">{project.description}</p>
            <div>
              {project.tags.map((tag, tagIndex) => (
                <Badge variant="outline" key={tagIndex} className="font-mono">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
