import { fetchRandomSuperHeroes } from "@/app/api/superHeroApi";
import type { SuperHeroProps } from "../SearchSection";
import type { SuperHeroApiProps } from "../SearchSection";
import { useQuery } from "@tanstack/react-query";
import HeroCard from "../HeroCard";
import { useFavorites } from "@/app/providers/FavoritesContext";

interface HeroSearchDiscoverProps {
  heroId: number;
}

const HeroSearchDiscover = ({ heroId }: HeroSearchDiscoverProps) => {
  const { isLiked, handleLike } = useFavorites();
  const { data, isLoading, error } = useQuery<SuperHeroProps[]>({
    queryFn: async () => {
      const result = await fetchRandomSuperHeroes();
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
    queryKey: ["heroes", heroId],
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>error is {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-10 py-16 bg-heroGray px-6 p-2  rounded">
      <div className="text-white text-3xl font-semibold w-full text-center">
        Discover other SuperHeroes
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {data!.map((hero, i) => {
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
    </div>
  );
};

export default HeroSearchDiscover;
