"use client"
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const limit: number = 10;

  const increaseHandler = () => {
    if (count < limit) {
      setCount(count + 1);
    } else {
      alert(`Count cannot exceed ${limit}`);
    }
  };

  const decreaseHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count can't be less than 0");
    }
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Counter;
