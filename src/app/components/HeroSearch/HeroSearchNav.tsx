import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDice } from "@fortawesome/free-solid-svg-icons";

interface HeroSearchNavProps {
  name: string;
  fullName: string;
  handleDiceClick: () => void;
}

const HeroSearchNav = ({ name, fullName, handleDiceClick }: HeroSearchNavProps) => {
  return (
    <div className=" flex justify-between items-center gap-2 py-4 w-full bg-[#212327] px-36">
      <Link href={"/"}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: "2rem" }}
          className="text-white cursor-pointer"
        />
      </Link>
      <div className="flex flex-col items-center">
        <div className="flex text-4xl font-semibold">{name}</div>
        <div className="border-r border-l border-heroYellow px-2 text-center">{fullName}</div>
      </div>
      <FontAwesomeIcon
        icon={faDice}
        onClick={handleDiceClick}
        style={{ fontSize: "2rem" }}
        className="text-white cursor-pointer"
      />
    </div>
  );
};

export default HeroSearchNav;
