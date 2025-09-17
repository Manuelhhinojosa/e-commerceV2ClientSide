// React hooks
import { useState } from "react";

// Static state (text)
import { searchBarText } from "../../assets/staticState/staticText";

// SearchBar component function
const SearchBar = () => {
  // State
  // Icons
  const _magnifyingGlassIcon = searchBarText.icons[0];
  const _closeXIcon = searchBarText.icons[1];
  // Logic state
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // functions
  //   toggle search bar
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
    setSearchTerm("");
  };

  //   handle search
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searchTerm:", searchTerm);
    setSearchTerm("");
    setIsOpen(false);
  };

  //   return
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "auto"
      } `}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            {/* input tag */}
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 text-center"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <_magnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <_closeXIcon className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <_magnifyingGlassIcon className="h-6 w-6 " />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
