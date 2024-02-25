import PageViewsChart from "@/components/analytics/weekly-views";
import { Card } from "@tremor/react";
import { analytics } from "@/lib/analytics";
import { getDate } from "@/lib/utils";

export default async function Page() {
  let data = await analytics.retrieveDays("pageview", 7);

  let projectData = await analytics.retrievePersistent("projectview");

  const Metrics = ({
    timeSeriesPageViews,
  }: {
    timeSeriesPageViews: Awaited<ReturnType<typeof analytics.retrieveDays>>;
    projectViews: Awaited<ReturnType<typeof analytics.retrievePersistent>>
  }) => {
    // calculate weekly view count
    let weeklyViewCount = timeSeriesPageViews
      .map((date) => {
        let count = date.events.reduce((acc, curr) => {
          return acc + Object.values(curr)[0]!;
        }, 0);
        return count;
      })
      .reduce((partialSum, a) => partialSum + a, 0);
    // calculate todays view count
    let today = getDate();
    let todaysViewCount = timeSeriesPageViews
      .filter((day) => {
        if (day.date === today) {
          return day;
        }
      })[0]
      .events.reduce((curr, acc) => {
        return curr + Object.values(acc)[0]!;
      }, 0);

    // calculate total project views
    let totalProjectViews = projectData.events.reduce((acc, curr) => {
      return acc + Object.values(curr)[0]!;
    }, 0);

    // calculate most viewed project
    let projectCounts: { [project: string]: number } = {};

    for (const event of projectData.events) {
      for (const key in event) {
        if (event.hasOwnProperty(key)) {
          const projectObj = JSON.parse(key);
          const projectName = projectObj.project;
          projectCounts[projectName] = (projectCounts[projectName] || 0) + event[key];
        }
      }
    }

    let maxProject: string | null = null;
    let maxValue: number | null = null;

    for (const [project, count] of Object.entries(projectCounts)) {
      if (maxValue === null || count > maxValue) {
        maxProject = project;
        maxValue = count;
      }
    }

    let quantStyle = "text-3xl font-semibold";

    return (
      <Card className="w-full p-2 grid grid-cols-2 sm:grid-cols-4 justify-items-center">
        <div>
          <p>Weekly Page Views</p>
          <p className={quantStyle}>{weeklyViewCount}</p>
        </div>
        <div>
          <p>Today&apos;s Page Views</p>
          <p className={quantStyle}>{todaysViewCount}</p>
        </div>
        <div>
          <p>Total Project Views</p>
          <p className={quantStyle}>{totalProjectViews}</p>
        </div>
        <div>
          <p>Most Viewed Project</p>
          <p className={quantStyle}>{maxProject}</p>
        </div>
      </Card>
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4 justify-center min-h-screen w-full sm:w-1/2">
      <h1 className="text-2xl sm:text-4xl font-bold">Site Analytics</h1>
      <Metrics timeSeriesPageViews={data} projectViews={projectData} />
      <PageViewsChart timeSeriesPageViews={data} />
    </div>
  );
}
