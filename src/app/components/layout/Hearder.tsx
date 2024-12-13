"use client";

import Image from "next/image";
import Popover from "./Popover/Popup";
import { useFavorites } from "@/app/providers/FavoritesContext";

const Header = () => {
  const { isLiked, handleLike } = useFavorites();

  return (
    <div className="flex items-center justify-between w-3/5 bg-heroBlack rounded-full px-6 p-2">
      <div className="flex items-center gap-2">
        <div>
          <Image src="/heroverse-logo-white.svg" width={50} height={50} alt="heroverse-logo" />
        </div>
        <div className="font-semibold">
          Hero<span className="text-heroYellow">V</span>erse
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Popover content={isLiked} />
      </div>
    </div>
  );
};

export default Header;
