import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface MovieCardProps {
  imageUrl: string;
}

const MovieCard = ({ imageUrl }: MovieCardProps) => {
  return (
    <div className="relative flex items-start justify-end  rounded-xl overflow-hidden">
      <div className="w-[267px] h-[387px]">
        <Image src={imageUrl} alt="test" layout="fill" />
      </div>
      <div className="absolute m-2 bg-heroGray w-6 h-6 flex items-center justify-center p-4 rounded-full ">
        <FontAwesomeIcon icon={faHeart} className="w-[16px] text-heroYellow  " />
      </div>
    </div>
  );
};

export default MovieCard;
