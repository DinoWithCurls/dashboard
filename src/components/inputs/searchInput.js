import React from "react";

const SearchInput = ({ bgColor, setValue }) => {
  return (
    <div className="inline-flex items-center text-bordergray bg-white p-2 rounded-xl">
      <input className="bg-white ml-2" placeholder="Search..." />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchInput;
