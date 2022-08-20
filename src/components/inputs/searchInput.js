import React from "react";
import { SearchIcon } from "../../icons";
const SearchInput = ({ onInput }) => {
  const handleChange = event => {
    onInput(event.target.value)
  }
  return (
    <div className="inline-flex items-center text-bordergray bg-white p-2 rounded-xl">
      <input className="bg-white ml-2 outline-none" onChange={handleChange} placeholder="Search..." />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
