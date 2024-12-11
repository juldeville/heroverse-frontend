import type { Stats } from "../components/SearchSection";

interface HeroStatsProps {
  stats: Stats;
}

const HeroStats = ({ stats }: HeroStatsProps) => {
  return (
    <div className="z-10 flex p-2 px-4 justify-between w-full items-center text-sm relative">
      <div className="z-10">💪{stats.strength}</div>
      <div className="z-10">🧠{stats.intelligence}</div>
      <div className="z-10">🛡️{stats.durability}</div>
      <div className="z-10">🔥{stats.power}</div>
      <div className="z-10">⚔️{stats.combat}</div>
      <div className="inset-0 absolute bg-heroGray opacity-50"></div>
    </div>
  );
};

export default HeroStats;
