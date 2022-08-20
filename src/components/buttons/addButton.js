import React from "react";
import { AddIcon } from "../../icons";
const AddButton = ({ buttonAction }) => {
  return (
    <button
      onClick={buttonAction}
      className="flex-row inline-flex items-center p-1 bg-themeblue text-white rounded-lg font-bold"
    >
      <AddIcon />
      <span className="mr-2">Add</span>
    </button>
  );
};

export default AddButton;
