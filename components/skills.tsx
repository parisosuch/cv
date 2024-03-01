import { Badge } from "./ui/badge";

let skills = [
  "Python",
  "C++",
  "C",
  "SQL",
  "Javascript",
  "Typescript",
  "NextJS",
  "React",
  "NodeJS",
  "Tailwindcss",
  "UNIX",
  "Git",
  "Drupal",
  "Firebase",
  "Supabase",
  "Docker",
  "Django",
  "Flask",
  "Pandas",
  "Matplotlib",
  "Figma",
  "MSSQL",
  "RESTful APIs",
  "Workflow Automation"
];

export default function Skills() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">Skills</h1>
      <div className="sm:space-x-1">
        {skills.map((skill, index) => (
          <Badge variant="outline" key={index} className="font-mono">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
