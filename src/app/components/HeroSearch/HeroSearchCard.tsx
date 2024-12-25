"use client";
import type { SuperHeroProps } from "../SearchSection";
import { useRouter } from "next/navigation";
import HeroSearchNav from "./HeroSearchNav";
import HeroSearchLeft from "./HeroSearchLeft";
import HeroSearchGraph from "./HeroSearchGraph";
import HeroSearchDiscover from "./HeroSearchDiscover";

const HeroSearchCard = ({ name, fullName, imageUrl, id, stats, appearance }: SuperHeroProps) => {
  const router = useRouter();
  const handleDiceClick = () => {
    const randomId = Math.floor(Math.random() * 731) + 1;
    router.push(`/search/${randomId}`);
  };
  return (
    <div className="bg-black w-3/5 flex flex-col  text-white items-center">
      <HeroSearchNav name={name} fullName={fullName} handleDiceClick={handleDiceClick} />
      <div className="px-36 flex py-20 gap-8">
        <HeroSearchLeft imageUrl={imageUrl} name={name} appearance={appearance!} />
        <div className="w-full  ">
          <HeroSearchGraph
            intelligence={stats.intelligence}
            strength={stats.strength}
            speed={stats.speed}
            durability={stats.durability}
            power={stats.power}
            combat={stats.combat}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <HeroSearchDiscover heroId={id} />
      </div>
    </div>
  );
};

export default HeroSearchCard;
