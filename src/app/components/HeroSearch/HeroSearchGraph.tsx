import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { Stats } from "../SearchSection";

const HeroSearchGraph = ({ intelligence, strength, speed, durability, power, combat }: Stats) => {
  const chartData = [
    { aptitude: "Intelligence", stat: intelligence },
    { aptitude: "Strengh", stat: strength },
    { aptitude: "Speed", stat: speed },
    { aptitude: "Durability", stat: durability },
    { aptitude: "Power", stat: power },
    { aptitude: "Combat", stat: combat },
  ];
  const chartConfig = {
    stat: {
      label: "stat",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;
  return (
    <Card className="bg-slate-black border-none ">
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[500px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis
              dataKey="aptitude"
              tick={{
                fill: "#ffffff", // Label color
                fontSize: 12, // Adjust font size
                dy: 2, // Vertical offset
              }}
            />
            <PolarGrid />
            <Radar
              dataKey="stat"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              stroke="#ffb444" // Border color (yellow)
              strokeWidth={2} // Adjust thickness (default is 1)
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default HeroSearchGraph;
