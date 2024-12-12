"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface FavoritesContextProps {
  isLiked: string[];
  handleLike: (arg: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [likedHeroes, setLikedHeroes] = useState<string[]>([]);
  const handleLike = (hero: string) => {
    likedHeroes.includes(hero)
      ? setLikedHeroes((prevState) => prevState.filter((e) => e !== hero))
      : setLikedHeroes((prevState) => [...prevState, hero]);
  };

  return (
    <FavoritesContext.Provider value={{ isLiked: likedHeroes, handleLike }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextProps => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
