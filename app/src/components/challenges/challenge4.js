"use client"


import { useState, useCallback } from 'react';

const useArray = (initialArray = []) => {
  const [array, setArray] = useState(initialArray);

  const push = useCallback((element) => {
    setArray(a => [...a, element]);
  }, []);

  const pop = useCallback(() => {
    setArray(a => a.slice(0, -1));
  }, []);

  const filter = useCallback((callback) => {
    setArray(a => a.filter(callback));
  }, []);

  const map = useCallback((callback) => {
    setArray(a => a.map(callback));
  }, []);

  return { array, push, pop, filter, map };
};

// Usage example
const ArrayComponent = () => {
  const { array, push, pop, filter, map } = useArray([1, 2, 3, 4, 5]);

  return (
    <div>
      <p>Array: {array.join(', ')}</p>
      <button onClick={() => push(array.length + 1)}>Push</button>
      <button onClick={pop}>Pop</button>
      <button onClick={() => filter(n => n % 2 === 0)}>Keep Even</button>
      <button onClick={() => map(n => n * 2)}>Double</button>
    </div>
  );
};

export default ArrayComponent;