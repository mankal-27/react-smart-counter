import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
    >
      {label}
    </button>
  );
};

export default Button;
