import type { Stats } from "../components/SearchSection";

interface HeroStatsProps {
  stats: Stats;
}

const HeroStats = ({ stats }: HeroStatsProps) => {
  const formatStat = (stat: number) => (isNaN(stat) ? "-" : stat);

  return (
    <div className="z-10 flex p-2 px-4 justify-between w-full items-center text-sm relative">
      <div className="z-10">💪{formatStat(stats.strength)}</div>
      <div className="z-10">🧠{formatStat(stats.intelligence)}</div>
      <div className="z-10">🛡️{formatStat(stats.durability)}</div>
      <div className="z-10">🔥{formatStat(stats.power)}</div>
      <div className="z-10">⚔️{formatStat(stats.combat)}</div>
      <div className="inset-0 absolute bg-heroGray opacity-50"></div>
    </div>
  );
};

export default HeroStats;
