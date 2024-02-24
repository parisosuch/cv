import { analytics } from "@/lib/analytics";
import { BarChart } from "@tremor/react";

type ChartProps = {
  timeSeriesPageViews: Awaited<ReturnType<typeof analytics.retrieveDays>>;
};

export default function Chart(props: ChartProps) {
  console.log("here");
  let data = props.timeSeriesPageViews.map((day) => {
    let dp = {
      date: day.date,
      visitors: day.events.reduce((acc, curr) => {
        return acc + Object.values(curr)[0]!;
      }, 0),
    };
    return dp;
  });

  console.log(data);

  return (
    <BarChart
      className="w-1/2 h-1/2"
      data={data}
      index="date"
      categories={["visitors"]}
      noDataText="loading..."
      showAnimation
      colors={["slate-950"]}
    />
  );
}
