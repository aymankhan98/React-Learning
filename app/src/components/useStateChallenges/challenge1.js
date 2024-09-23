"use client"

import React, { useEffect, useState } from 'react';

const CounterChallenge = ({ max = 5 }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => (prevCount + 1) % (max + 1));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default CounterChallenge;

const [count,setCount] = useState(0)

useEffect(()=>{
  setTimeout(()=>{
    setCount((count))
  })
})