import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
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
        <FontAwesomeIcon icon={faHeart} className="w-[16px] text-heroYellow" />
        <div>Favorites</div>
      </div>
    </div>
  );
};

export default Header;
