"use client"

import React, { useState } from 'react';

const CounterChallenge = ({ max = 5 }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => (prevCount + 1) % (max + 1));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterChallenge;