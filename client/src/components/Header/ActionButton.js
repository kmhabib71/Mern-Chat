// ActionButton.jsx
import React from "react";

const ActionButton = ({ actionText }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {actionText}
    </button>
  );
};

export default ActionButton;
