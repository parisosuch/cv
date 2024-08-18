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
    summary:
      "Automated business processes using Python, Pandas, and SQL. Developed scalable back-end services with Django and Flask, designed user-friendly interfaces using React and Tailwind CSS. Created REST API Logging microservice, applied Pandas for data analysis, enhancing efficiency and supporting data-driven decisions.",
    start: "2023",
    end: "2024",
  },
  {
    name: "Sonoma State University - Rohnert Park, CA",
    position: "Undergraduate Researcher",
    summary:
      "Recipient of the Koret Scholarship to develop the open-source Python library QCpy, focusing on simulating quantum circuits. Part of an undergraduate team uniquely invited to SIGCSE 2023, a prestigious international conference for computer science education. Coauthored a peer-reviewed abstract published in the ACM Digital Library of research papers.",
    start: "2021",
    end: "2023",
  },
  {
    name: "Sonoma State University - Rohnert Park, CA",
    position: "Web Developer",
    summary:
      "Utilized Drupal, HTML5, CSS3, and JavaScript to generate content for department sites. Achieved a 12% increase in site traffic, as per Google Analytics, through effective Search Engine Optimization (SEO) strategies. Automated legacy site content retrieval using web scraping with Beautiful Soup 4 in Python.",
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
