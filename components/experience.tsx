let experience = [
  {
    name: "Nelson & Kennard",
    position: "Junior Software Engineer",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tincidunt lacus. Fusce hendrerit pulvinar elit, eu maximus diam elementum non.Donec varius diam ac dignissim mollis. Nullam venenatis lorem nisl, ut viverra orci rhoncus eu. Suspendisse dignissim non velit eu interdum. Duis varius commodo ipsum faucibus malesuada.",
    start: "2023",
    end: "Current",
  },
  {
    name: "Sonoma State University",
    position: "Undergraduate Researcher",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tincidunt lacus. Fusce hendrerit pulvinar elit, eu maximus diam elementum non.Donec varius diam ac dignissim mollis. Nullam venenatis lorem nisl, ut viverra orci rhoncus eu. Suspendisse dignissim non velit eu interdum. Duis varius commodo ipsum faucibus malesuada.",
    start: "2021",
    end: "2023",
  },
  {
    name: "Sonoma State University",
    position: "Web Developer",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tincidunt lacus. Fusce hendrerit pulvinar elit, eu maximus diam elementum non.Donec varius diam ac dignissim mollis. Nullam venenatis lorem nisl, ut viverra orci rhoncus eu. Suspendisse dignissim non velit eu interdum. Duis varius commodo ipsum faucibus malesuada.",
    start: "2019",
    end: "2021",
  },
];

export default function Experience() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-2xl font-bold">Experience</h1>
      <div className="space-y-8">
        {experience.map((content, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="font-semibold text-lg">{content.position}</h2>
              <p className="text-gray-500 text-sm text-center">
                {content.start} - {content.end}
              </p>
            </div>
            <p className="text-md font-light">{content.name}</p>
            <p className="text-sm">{content.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
