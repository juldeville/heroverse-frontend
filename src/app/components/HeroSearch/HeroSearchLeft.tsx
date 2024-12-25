import Image from "next/image";
import type { Appearance } from "../SearchSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRulerVertical, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
interface HeroSearchLeftProps {
  name: string;
  appearance: Appearance;
  imageUrl: string;
}

const HeroSearchLeft = ({ imageUrl, appearance, name }: HeroSearchLeftProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-auto relative max-w-md">
        <Image
          src={imageUrl}
          alt="Hero Image"
          layout="responsive"
          width={400}
          height={500}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="bg-heroGray rounded-xl">
        <div className=" p-6">
          <div className=" border-l-2 border-heroYellow px-2">
            {name} is a {appearance?.race.toLowerCase()} with {appearance?.eyeColor.toLowerCase()}{" "}
            eyes and {appearance?.hairColor.toLowerCase()} hair
          </div>
        </div>
        <div className="flex gap-2 items-center px-6 pb-6 ">
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
  );
};

export default HeroSearchLeft;
