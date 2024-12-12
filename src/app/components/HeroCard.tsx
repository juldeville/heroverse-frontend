import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as likedHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

import { useState } from "react";
import type { Stats } from "../components/SearchSection";
import HeroStats from "./HeroStats";

interface MovieCardProps {
  imageUrl: string;
  stats: Stats;
  isLiked: boolean;
  name: string;
  handleLike: (arg: string) => void;
}

const HeroCard = ({ imageUrl, stats, name, isLiked, handleLike }: MovieCardProps) => {
  const [isHovered, updateIsHovered] = useState(false);
  return (
    <div
      className="relative flex flex-col justify-between rounded-xl overflow-hidden w-[267px] h-[387px]"
      onMouseEnter={() => updateIsHovered(true)}
      onMouseLeave={() => updateIsHovered(false)}
    >
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Movie Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 267px"
        />
      </div>
      <div className="flex justify-end p-2 z-10">
        <div className="bg-heroGray w-6 h-6 flex items-center justify-center p-4 rounded-full">
          {isLiked ? (
            <FontAwesomeIcon
              icon={likedHeart}
              className="w-[16px] text-heroYellow cursor-pointer"
              onClick={() => handleLike(name)}
            />
          ) : (
            <FontAwesomeIcon
              icon={regularHeart}
              className="w-[16px] text-heroYellow cursor-pointer"
              onClick={() => handleLike(name)}
            />
          )}
        </div>
      </div>
      {isHovered && <HeroStats stats={stats} />}
    </div>
  );
};

export default HeroCard;
