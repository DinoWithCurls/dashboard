import React from "react";

const DateInput = ({ onInput }) => {
  const handleChange = (event) => {
    onInput(event.target.value);
  };
  return (
    <div className="inline-flex items-center bg-lightgray p-2 rounded-xl w-full">
      <input
        className="outline-none bg-lightgray w-full font-semibold ml-2"
        placeholder="Enter date"
        onChange={handleChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-sectext mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
};

export default DateInput;
