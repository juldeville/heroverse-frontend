import { heroFavorite } from "@/app/providers/FavoritesContext";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

interface PopupCardProps {
  content: heroFavorite;
  handleLike: (arg: heroFavorite) => void;
}
const PopupCard = ({ content, handleLike }: PopupCardProps) => {
  return (
    <div className="w-[250px] h-16 flex items-stretch py-1 gap-2">
      <div className="w-[250px] h-16 flex items-stretch py-1 gap-2">
        <div className="w-14  relative overflow-hidden rounded-xl">
          <Image src={content.imageUrl} alt="Hero" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl">{content.name}</div>
          <div className="border-l-2 border-heroYellow px-2 text-xs">{content.fullName}</div>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <FontAwesomeIcon
          icon={faXmarkCircle}
          className="w-[16px] text-heroYellow cursor-pointer"
          onClick={() => handleLike(content)}
        />
      </div>
    </div>
  );
};
export default PopupCard;
