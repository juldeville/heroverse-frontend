"use client";
import type { SuperHeroProps } from "./SearchSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDice, faRulerVertical, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "Intelligence", desktop: 186 },
  { month: "Combat", desktop: 305 },
  { month: "Speed", desktop: 237 },
  { month: "Durability", desktop: 273 },
  { month: "Power", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const HeroSearchCard = ({ name, fullName, imageUrl, id, stats, appearance }: SuperHeroProps) => {
  const router = useRouter();
  const handleDiceClick = () => {
    const randomId = Math.floor(Math.random() * 731) + 1;
    router.push(`/search/${randomId}`);
  };
  return (
    <div className="bg-black w-3/5 flex flex-col   ">
      <div className=" flex justify-between items-center gap-2 py-4 w-full bg-[#212327] px-36">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "2rem" }} className="text-white cursor-pointer" />
        </Link>
        <div>
          <div className="flex text-4xl font-semibold">{name}</div>
          <div className="border-r border-l border-heroYellow px-2 text-center">{fullName}</div>
        </div>
        <FontAwesomeIcon
          icon={faDice}
          onClick={handleDiceClick}
          style={{ fontSize: "2rem" }}
          className="text-white cursor-pointer"
        />
      </div>
      <div className="px-36 flex py-20">
        <div className="flex flex-col gap-6">
          <div className="w-full h-auto relative max-w-md">
            <Image
              src={imageUrl}
              alt="Hero Image"
              layout="responsive"
              width={400}
              height={500}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="bg-heroGray rounded-xl">
            <div className=" p-6">
              <div className=" border-l-2 border-heroYellow px-2">
                {name} is a {appearance?.race.toLowerCase()} with {appearance?.eyeColor.toLowerCase()} eyes and{" "}
                {appearance?.hairColor.toLowerCase()} hair
              </div>
            </div>
            <div className="flex gap-2 items-center px-6 pb-6 ">
              <FontAwesomeIcon
                icon={faRulerVertical}
                style={{ fontSize: "1rem" }}
                className="text-heroYellow cursor-pointer"
              />
              <div>{appearance?.height}</div>
              <FontAwesomeIcon
                icon={faWeightHanging}
                style={{ fontSize: "1rem" }}
                className="text-heroYellow cursor-pointer"
              />
              <div>{appearance?.weight}</div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Card className="bg-slate-black">
            <CardContent className="pb-0">
              <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                <RadarChart data={chartData}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <PolarAngleAxis dataKey="month" />
                  <PolarGrid />
                  <Radar
                    dataKey="desktop"
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
        </div>
      </div>
    </div>
  );
};

export default HeroSearchCard;
