import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as likedHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import type { Stats } from "../components/SearchSection";
import HeroStats from "./HeroStats";
import type { heroFavorite } from "../providers/FavoritesContext";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  imageUrl: string;
  stats: Stats;
  isLiked: boolean;
  name: string;
  fullName: string;
  handleLike: (arg: heroFavorite) => void;
  id: number;
}

const HeroCard = ({ imageUrl, stats, name, isLiked, fullName, handleLike, id }: MovieCardProps) => {
  const router = useRouter();
  const handleCardClick = (heroId: number) => {
    router.push(`/search/${heroId}`);
  };

  const handleLikeClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    handleLike({ imageUrl, name, fullName });
  };

  const [isHovered, updateIsHovered] = useState(false);
  return (
    <div
      className="relative flex flex-col justify-between rounded-xl overflow-hidden w-[267px] h-[387px] cursor-pointer"
      onMouseEnter={() => updateIsHovered(true)}
      onMouseLeave={() => updateIsHovered(false)}
      onClick={() => handleCardClick(id)}
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
              onClick={handleLikeClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={regularHeart}
              className="w-[16px] text-heroYellow cursor-pointer"
              onClick={handleLikeClick}
            />
          )}
        </div>
      </div>
      {isHovered && <HeroStats stats={stats} />}
    </div>
  );
};

export default HeroCard;
