import React, { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Perform search action with searchTerm
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="relative flex items-center justify-center">
      <input
        type="text"
        className="py-[0.5rem] px-4 rounded-l-md border-none border-r border-black text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        className="bg-white hover:bg-indigo-600 text-white py-2 px-4 rounded-r-md transition-colors duration-300 flex items-center justify-center"
        onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
