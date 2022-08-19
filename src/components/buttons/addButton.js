import React from "react";
const AddButton = ({ buttonAction }) => {
  return (
    <button
      onClick={buttonAction}
      className="flex-row inline-flex items-center bg-themeblue text-white p-0.5 rounded-lg font-bold"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white ml-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
      <span className="mr-2">Add</span>
    </button>
  );
};

export default AddButton;
