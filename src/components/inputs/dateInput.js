import React from "react";
import { CalendarIcon } from "../../icons";
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
      <CalendarIcon />
    </div>
  );
};

export default DateInput;
