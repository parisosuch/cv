import { analytics } from "@/lib/analytics";
import { BarChart, Card, Title } from "@tremor/react";

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
    <Card className="w-full p-2 sm:w-1/2 h-1/2">
      <Title className="text-center">Total Vistors Per Day</Title>
      <BarChart
        className="font-mono py-4"
        data={data}
        index="date"
        categories={["visitors"]}
        noDataText="loading..."
        showAnimation
        colors={["slate-950"]}
      />
    </Card>
  );
}
