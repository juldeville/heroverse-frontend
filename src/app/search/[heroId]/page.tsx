"use client";

import { useQuery } from "@tanstack/react-query";
import type { SuperHeroProps } from "@/app/components/SearchSection";
import { fetchSuperHeroById } from "@/app/api/superHeroApi";
import { useParams } from "next/navigation";

const HeroPage = () => {
  const { heroId } = useParams();

  const { data, isLoading, error } = useQuery<SuperHeroProps[]>({
    queryFn: async () => {
      const result = await fetchSuperHeroById(+heroId!);
      return result;
    },
    queryKey: ["hero", heroId],
  });
  console.log("data is: ", data);
  return <div>Hello world</div>;
};

export default HeroPage;
