import React from "react";

const ChangeButton = ({ buttonAction }) => {
  return (
    <button className="inline-flex items-center flex-row rounded-lg border-2 bg-white border-bordergray text-bordergray outline-none p-1">
      <span>Change</span>
    </button>
  );
};

export default ChangeButton;