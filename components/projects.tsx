import { Badge } from "./ui/badge";

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
];

export default function Projects() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="space-y-2 border-2 border-gray-200 shadow-sm rounded-md p-2"
          >
            <h2 className="font-semibold text-lg">{project.name}</h2>
            <p className="text-sm">{project.description}</p>
            <div>
              {project.tags.map((tag, tagIndex) => (
                <Badge variant="outline" key={tagIndex}>
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
