"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type heroFavorite = {
  name: string;
  imageUrl: string;
  fullName: string;
};

interface FavoritesContextProps {
  isLiked: heroFavorite[];
  handleLike: (arg: heroFavorite) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [likedHeroes, setLikedHeroes] = useState<heroFavorite[]>([]);
  const handleLike = (hero: heroFavorite) => {
    const isLiked = likedHeroes.some((el) => el.name === hero.name);
    isLiked
      ? setLikedHeroes((prevState) => prevState.filter((char) => char.name !== hero.name))
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
