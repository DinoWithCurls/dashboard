import React from "react";
import AddButton from "./buttons/addButton";
import FilterButton from "./buttons/filterButton";
import SearchInput from "./inputs/searchInput";

const TableHeader = () => {
  return (
    <div className="inline-flex items-center justify-between w-full p-5">
      <div className="text-2xl font-bold">User Records</div>
      <div className="inline-flex items-center w-[30%] justify-between">
        <SearchInput />
        <FilterButton />
        <AddButton />
      </div>
    </div>
  );
};

export default TableHeader;
