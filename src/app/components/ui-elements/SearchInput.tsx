import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  return (
    <div className="w-4/5 bg-heroGray text-heroBlack  border-2 border-[#D1D5DB] p-3 px-4 rounded-full flex gap-6">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="w-[16px] text-[#848689]"
      />
      <input
        className="w-full bg-heroGray focus: outline-none caret-inherit text-white"
        placeholder="Search for a SuperHero..."
      />
    </div>
  );
};

export default SearchInput;
