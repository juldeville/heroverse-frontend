"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import type { SuperHeroProps } from "@/app/components/SearchSection";
import { fetchSuperHeroById } from "@/app/api/superHeroApi";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDice } from "@fortawesome/free-solid-svg-icons";
import Header from "@/app/components/layout/Hearder";
import Image from "next/image";
import HeroSearchCard from "@/app/components/HeroSearchCard";

const HeroPage = () => {
  const { heroId } = useParams();
  const { data, isLoading, error, isFetching } = useQuery<SuperHeroProps>({
    queryFn: async () => {
      const result = await fetchSuperHeroById(+heroId!);
      const hero = result.hero;
      console.log("result is:", result);
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
        appearance: {
          gender: hero.appearance.gender,
          race: hero.appearance.race,
          eyeColor: hero.appearance["eye-color"],
          hairColor: hero.appearance["hair-color"],
          weight: hero.appearance.weight[1],
          height: hero.appearance.height[1],
        },
      };
    },
    queryKey: ["hero", heroId],
    placeholderData: keepPreviousData,
  });
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error is: {error.name}</div>;
  }
  console.log("data is", data?.appearance);
  return (
    <div>
      <div className="relative h-screen w-full py-10">
        <div className="absolute inset-0 bg-gray-500 opacity-30"></div>
        <div className="relative z-10 w-full flex flex-col items-center ">
          <Header />
          <HeroSearchCard
            id={data!.id}
            name={data!.name}
            imageUrl={data!.imageUrl}
            stats={data!.stats}
            fullName={data!.fullName}
            appearance={data!.appearance}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
