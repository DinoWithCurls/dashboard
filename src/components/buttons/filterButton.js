import React from "react";
import { FilterIcon } from "../../icons";
const FilterButton = ({ buttonAction }) => {
  return (
    <button className="inline-flex items-center flex-row rounded-lg border-2 bg-white border-bordergray text-bordergray">
      <FilterIcon />
      <span className="mr-2">Filter</span>
    </button>
  );
};
export default FilterButton;