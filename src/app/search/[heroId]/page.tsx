"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import type { SuperHeroProps } from "@/app/components/SearchSection";
import { fetchSuperHeroById } from "@/app/api/superHeroApi";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDice } from "@fortawesome/free-solid-svg-icons";
import Header from "@/app/components/layout/Hearder";
import Image from "next/image";

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
  console.log("data is", data);
  return (
    <div>
      <div className="relative h-screen w-full py-10 ">
        <div className="absolute inset-0 bg-gray-500 opacity-30"></div>
        <div className="relative z-10 w-full flex flex-col items-center gap-14">
          <Header />
          <div className="w-3/5 h-[200px] flex  justify-between items-center gap-2 px-10">
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ fontSize: "2rem" }}
              className="text-white cursor-pointer"
            />
            <div>
              <div className="flex text-4xl font-semibold">{data!.name}</div>
              <div className="border-r border-l border-heroYellow px-2 text-center">
                {data?.fullName}
              </div>
            </div>
            <FontAwesomeIcon
              icon={faDice}
              style={{ fontSize: "2rem" }}
              className="text-white cursor-pointer"
            />
          </div>
          <div className="">
            <Image src={data!.imageUrl} alt="Movie Image" width={300} height={300} />
            <div className="bg-slate-400">Batman</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
