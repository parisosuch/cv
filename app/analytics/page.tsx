import PageViewsChart from "@/components/analytics/weekly-views";
import { Card, Title } from "@tremor/react";
import { analytics } from "@/lib/analytics";
import { getDate } from "@/lib/utils";
import { time } from "console";

export default async function Page() {
  let data = await analytics.retrieveDays("pageview", 7);

  const Metrics = ({
    timeSeriesPageViews,
  }: {
    timeSeriesPageViews: Awaited<ReturnType<typeof analytics.retrieveDays>>;
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

    return (
      <Card className="w-1/2 flex flex-row justify-around">
        <div>
          <Title>Weekly Page Views</Title>
          <p>{weeklyViewCount}</p>
        </div>
        <div>
          <Title>Today&apos;s Page Views</Title>
          <p>{todaysViewCount}</p>
        </div>
      </Card>
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4 justify-center min-h-screen w-full">
      <h1 className="text-2xl sm:text-4xl font-bold">Site Analytics</h1>
      <Metrics timeSeriesPageViews={data} />
      <PageViewsChart timeSeriesPageViews={data} />
    </div>
  );
}
