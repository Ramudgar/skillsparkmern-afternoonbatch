import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div id="counter-container">
      <h1>Count: {count}</h1>
      <div>
        <button id="inc" onClick={increment}>
          Increment
        </button>
        <button id="dec" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
