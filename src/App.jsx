import React, { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

  // Dynamic color logic
  const getColor = () => {
    if (count > 10) return "text-green-400";
    if (count < 0) return "text-red-400";
    return "text-cyan-400";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Smart Counter</h1>

      <CounterDisplay count={count} color={getColor()} />

      <div className="flex gap-4 mt-6">
        <Button label="➖ Decrease" onClick={() => setCount(count - 1)} />
        <Button label="🔁 Reset" onClick={() => setCount(0)} />
        <Button label="➕ Increase" onClick={() => setCount(count + 1)} />
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        Dynamic color changes as count crosses thresholds.
      </p>
    </div>
  );
};

export default App;
