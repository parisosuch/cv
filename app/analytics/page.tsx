import Chart from "@/components/analytics/weekly-views";
import { analytics } from "@/lib/analytics";

export default async function Page() {
  let data = await analytics.retrieveDays("pageview", 7);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Chart timeSeriesPageViews={data} />
    </div>
  );
}
