"use client";

import { useQuery } from "@tanstack/react-query";
import type { SuperHeroProps } from "@/app/components/SearchSection";
import { fetchSuperHeroById } from "@/app/api/superHeroApi";

const HeroPage = () => {
  const id = 1;

  const { data, isLoading, error } = useQuery<SuperHeroProps[]>({
    queryFn: async () => {
      const result = await fetchSuperHeroById(id);
      console.log("result is", result);
      return result;
    },
    queryKey: ["hero", id],
  });

  return <div>Hello world</div>;
};

export default HeroPage;
