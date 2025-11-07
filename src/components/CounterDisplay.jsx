import React from "react";

const CounterDisplay = ({ count, color }) => {
  return (
    <div className="text-center">
      <h2 className={`text-6xl font-bold ${color}`}>{count}</h2>
    </div>
  );
};

export default CounterDisplay;
