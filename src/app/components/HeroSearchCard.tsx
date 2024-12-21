import type { SuperHeroProps } from "./SearchSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDice,
  faRulerVertical,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const HeroSearchCard = ({ name, fullName, imageUrl, id, stats, appearance }: SuperHeroProps) => {
  return (
    <div className="bg-black w-3/5 flex flex-col   ">
      <div className=" flex justify-between items-center gap-2 py-4 w-full bg-[#212327] px-36">
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: "2rem" }}
          className="text-white cursor-pointer"
        />
        <div>
          <div className="flex text-4xl font-semibold">{name}</div>
          <div className="border-r border-l border-heroYellow px-2 text-center">{fullName}</div>
        </div>
        <FontAwesomeIcon
          icon={faDice}
          style={{ fontSize: "2rem" }}
          className="text-white cursor-pointer"
        />
      </div>
      <div className="px-36 flex py-20">
        <div>
          <div className="w-[400px] h-[500px] relative">
            <Image src={imageUrl} alt="Hero Image" fill className="object-cover" />
          </div>
          <div>
            <div className="bg-heroGray p-6">
              <div className=" border-l-2 border-heroYellow px-2">
                {name} is a {appearance?.race.toLowerCase()} with{" "}
                {appearance?.eyeColor.toLowerCase()} eyes and {appearance?.hairColor.toLowerCase()}{" "}
                hair
              </div>
            </div>
            <div className="bg-heroGray px-6">
              <div className="flex gap-2">
                <FontAwesomeIcon
                  icon={faRulerVertical}
                  style={{ fontSize: "1rem" }}
                  className="text-heroYellow cursor-pointer"
                />
                <div>{appearance?.height}</div>
                <FontAwesomeIcon
                  icon={faWeightHanging}
                  style={{ fontSize: "1rem" }}
                  className="text-heroYellow cursor-pointer"
                />
                <div>{appearance?.weight}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default HeroSearchCard;
