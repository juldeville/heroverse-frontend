"use client";

import HeroCard from "./HeroCard";
import SearchInput from "./ui-elements/SearchInput";
import { useQuery } from "@tanstack/react-query";
import { fetchSuperHeroes } from "../api/superHeroApi";

interface SuperHero {
  id: number;
  name: string;
  imageUrl: string;
}
interface SuperHeroApiPartial {
  id: string;
  name: string;
  image: { url: string };
}

const SearchSection = () => {
  const { data, isLoading, error } = useQuery<SuperHero[]>({
    queryFn: async () => {
      const result = await fetchSuperHeroes();
      return result.heroes.map((hero: SuperHeroApiPartial) => {
        return { id: +hero.id, name: hero.name, imageUrl: hero.image.url };
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
        {data!.map((hero, i) => (
          <HeroCard imageUrl={hero.imageUrl} key={hero.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
