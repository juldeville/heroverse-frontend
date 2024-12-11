"use client";

import HeroCard from "./HeroCard";
import SearchInput from "./ui-elements/SearchInput";
import { useQuery } from "@tanstack/react-query";
import { fetchSuperHeroes } from "../api/superHeroApi";
import { useState } from "react";

export interface Stats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

interface SuperHero {
  id: number;
  name: string;
  imageUrl: string;
  stats: Stats;
}
interface SuperHeroApiPartial {
  id: string;
  name: string;
  image: { url: string };
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
}

const SearchSection = () => {
  const [isLiked, setIsLiked] = useState<string[]>([]);
  const handleLike = (hero: string) => {
    isLiked.includes(hero)
      ? setIsLiked((prevState) => prevState.filter((e) => e !== hero))
      : setIsLiked((prevState) => [...prevState, hero]);
  };
  const { data, isLoading, error } = useQuery<SuperHero[]>({
    queryFn: async () => {
      const result = await fetchSuperHeroes();

      return result.heroes.map((hero: SuperHeroApiPartial) => {
        return {
          id: +hero.id,
          name: hero.name,
          imageUrl: hero.image.url,
          stats: {
            intelligence: +hero.powerstats.intelligence,
            strength: +hero.powerstats.strength,
            speed: +hero.powerstats.speed,
            durability: +hero.powerstats.durability,
            power: +hero.powerstats.power,
            combat: +hero.powerstats.combat,
          },
        };
      });
    },
    queryKey: ["heroes"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-3/5 flex flex-col bg-heroGray rounded-2xl py-6 items-center gap-4">
      <SearchInput />
      <div className="flex flex-wrap justify-center gap-4">
        {data!.map((hero, i) => {
          const liked = isLiked.includes(hero.name) ? true : false;
          return (
            <HeroCard
              imageUrl={hero.imageUrl}
              stats={hero.stats}
              key={hero.id}
              isLiked={liked}
              handleLike={handleLike}
              name={hero.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchSection;
