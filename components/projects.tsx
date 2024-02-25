"use client";

import { Badge } from "./ui/badge";
import { analytics } from "@/lib/analytics";

let projects = [
  {
    name: "Hyprcrd",
    description:
      "Link-in-bio web application. Built-in QR code generator to share profiles in person.",
    url: "https://hyprcrd.com/paris",
    tags: ["React", "JS", "Tailwind", "Firebase", "Figma"],
  },
  {
    name: "QCpy",
    description:
      "Open source quantum computing Python library. Team invited to SIGCSE 2023 to present project.",
    url: "https://github.com/QCpython/QCpy",
    tags: ["Python", "Numpy", "Quantum Computing", "OSS", "Research"],
  },
  {
    name: "Copycat",
    description: "Open source and self-hostable logging RESTful API.",
    url: "https://github.com/parisosuch-dev/copycat",
    tags: ["Python", "Django", "Django Rest Framework", "REST", "API"],
  },
  {
    name: "CV",
    description:
      "Quick and clean CV website. What you are currently looking at right now.",
    url: "https://github.com/parisosuch-dev/cv",
    tags: ["NextJS", "Tailwind", "Vercel", "Shadcn"],
  },
];

export default function Projects() {
  const trackProjectView = async (projectName: string) => {
    await analytics
      .track("projectview", { project: projectName }, { persist: true })
      .then(() => {
        console.log("Successful projectview track.");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">Projects</h1>
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="space-y-2 border-2 border-gray-200 shadow-sm rounded-md p-2"
          >
            <h2 className="font-semibold text-sm sm:text-lg hover:underline">
              <a
                href={project.url}
                target="_blank"
                onClick={() => trackProjectView(project.name)}
              >
                {project.name}
              </a>
            </h2>
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
