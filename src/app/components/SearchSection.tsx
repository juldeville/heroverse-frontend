"use client";
import HeroCard from "./HeroCard";
import SearchInput from "./ui-elements/SearchInput";
import Button from "./ui-elements/Button";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchSuperHeroes } from "../api/superHeroApi";
import { useFavorites } from "../providers/FavoritesContext";
import { useState, useEffect } from "react";
import SkeletonPlaceholder from "./ui-elements/SkeletonPlaceholder";

export interface Stats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Appearance {
  gender: string;
  race: string;
  eyeColor: string;
  hairColor: string;
  height: string;
  weight: string;
}

export interface SuperHeroProps {
  id: number;
  name: string;
  imageUrl: string;
  stats: Stats;
  fullName: string;
  appearance?: Appearance;
}
export interface SuperHeroApiProps {
  id: string;
  name: string;
  image: { url: string };
  biography: { "full-name": string };
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
  const { isLiked, handleLike } = useFavorites();
  const [heroes, setHeroes] = useState<SuperHeroProps[]>([]);
  const [batch, setBatch] = useState<number>(1);
  const { data, isLoading, error, isFetching } = useQuery<SuperHeroProps[]>({
    queryFn: async () => {
      const result = await fetchSuperHeroes(batch);
      return result.heroes.map((hero: SuperHeroApiProps) => {
        return {
          id: +hero.id,
          name: hero.name,
          imageUrl: hero.image.url,
          fullName: hero.biography["full-name"],
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
    queryKey: ["heroes", batch],
    placeholderData: keepPreviousData,
  });
  useEffect(() => {
    if (data) {
      setHeroes((prevState) => {
        const seen = new Set();
        return [...prevState, ...data].filter((hero) => {
          if (seen.has(hero.id)) {
            return false;
          }
          seen.add(hero.id);
          return true;
        });
      });
    }
  }, [data]);

  const handleBatch = () => {
    setBatch((prevState) => prevState + 1);
  };

  if (isLoading) {
    return (
      <div className="w-3/5 flex flex-col bg-heroGray rounded-2xl py-6 items-center gap-4">
        <SearchInput />
        <div>
          <SkeletonPlaceholder size="multiple" />
        </div>
        <Button label="Load More" handleClick={handleBatch} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  7;
  return (
    <div className="w-3/5 flex flex-col bg-heroGray rounded-2xl py-6 items-center gap-4">
      <SearchInput />
      <div className="flex flex-wrap justify-center gap-4">
        {heroes.map((hero, i) => {
          const liked = isLiked.some((el) => el.name === hero.name);
          return (
            <HeroCard
              id={hero.id}
              imageUrl={hero.imageUrl}
              stats={hero.stats}
              key={hero.id}
              isLiked={liked}
              handleLike={handleLike}
              name={hero.name}
              fullName={hero.fullName}
            />
          );
        })}
      </div>
      {isFetching && (
        <div>
          <SkeletonPlaceholder size="multiple" />
        </div>
      )}
      <Button label="Load More" handleClick={handleBatch} />
    </div>
  );
};

export default SearchSection;
