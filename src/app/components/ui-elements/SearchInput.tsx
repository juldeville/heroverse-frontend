import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSuperHeroById } from "@/app/api/superHeroApi";
import type { SuperHeroProps } from "../SearchSection";
import allHeroes from "../../../../public/all_heroes.json";
import { useRouter } from "next/navigation";

interface SearchResult {
  id: number;
  name: string;
}

const SearchInput = () => {
  const router = useRouter();
  const [searchResultsData, setSearchResultsData] = useState<SearchResult[]>([]);
  const [searchInput, setSearchInput] = useState("");

  console.log("search results are :", searchResultsData);

  useEffect(() => {
    if (searchInput.trim().length > 3) {
      const filteredHeroes = allHeroes.filter((heroData) => {
        return heroData.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setSearchResultsData(filteredHeroes);
    } else {
      setSearchResultsData([]);
    }
  }, [searchInput]);

  const handleResultSelectionClick = (heroId: number) => {
    router.push(`/search/${heroId}`);
  };

  const searchResults = searchResultsData.map((searchResultData) => {
    return (
      <div
        key={searchResultData.id}
        className="cursor-pointer hover:bg-gray-500 hover:text-white"
        onClick={() => handleResultSelectionClick(searchResultData.id)}
      >
        {searchResultData.name}
      </div>
    );
  });

  return (
    <div className=" relative w-4/5">
      <div className=" bg-heroGray text-heroBlack  border-2 border-[#D1D5DB] p-3 px-4 rounded-full flex gap-6 items-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[16px] text-[#848689]" />
        <input
          className="w-full bg-heroGray outline-none  caret-inherit text-white"
          placeholder="Search for a SuperHero..."
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </div>
      {searchResultsData.length > 0 && (
        <div className="border border-white absolute top-full left-0 right-0 bg-heroGray  z-50 rounded-lg mt-4 p-2">
          {searchResults}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

// const { data, isLoading, error } = useQuery<SuperHeroProps[]>({
//   queryFn: async () => {
//     const result = await fetchSuperHeroById(id);
//     console.log("result is", result);
//     return result;
//   },
//   queryKey: ["hero", id],
// });
