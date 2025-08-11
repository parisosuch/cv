let experience = [
  {
    name: "Jackson Family Wines - Santa Rosa, CA",
    position: "Associate Developer",
    start: "2024",
    end: "Current",
  },
  {
    name: "Nelson & Kennard - Sacramento, CA",
    position: "Junior Software Engineer",
    summary: "Automated business processes using Python and T-SQL. Managed a legacy automation engine built in Flask. Led and coordinated a project to migrate the legacy automation engine to a Django RESTful API. This project included a front-end application built in NextJS 13 and Typescript.",
    start: "2023",
    end: "2024",
  },
  {
    name: "Sonoma State University - Rohnert Park, CA",
    position: "Undergraduate Researcher",
    summary: "Recipient of the Koret Scholarship to develop an open-source Python library to simulate quantum computation, called QCpy. This research was part of an undergraduate team uniquely invited to SIGCSE 2023, a renowned international conference for computer science education. Research included the coauthoring of a peer-reviewed abstract published in the ACM Digital Library of research papers.  ", start: "2021",
    end: "2023",
  },
  {
    name: "Sonoma State University - Rohnert Park, CA",
    position: "Web Developer",
    summary:
      "Utilized Drupal, HTML5, CSS3, and JavaScript to create and manage content for univeristy department sites. Took part in a campaign to optimize department sites through Search Engine Optimization (SEO) strategies. Was part of a project to automate legacy site content retrieval using web scraping with Beautiful Soup 4 in Python.",
    start: "2019",
    end: "2021",
  },
];

export default function Experience() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">Experience</h1>
      <div className="space-y-8 font-mono">
        {experience.map((content, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="font-semibold text-sm sm:text-lg">
                {content.position}
              </h2>
              <p className="text-gray-500 text-sm sm:text-lg text-center">
                {content.start} - {content.end}
              </p>
            </div>
            <p className="text-xs sm:text-sm font-light">{content.name}</p>
            <p className="text-sm">{content.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
