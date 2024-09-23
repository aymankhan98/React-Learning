"use client"


import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState( );
  const [error, setError] = useState();

  const fetchDummyAPI = async () => {

    
    setLoad(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoad(false);
    }
  };
  useEffect(() => {
    fetchDummyAPI();
  }, []);

  if (load) return <div>load</div>;
  if (error) return (
    <div>
      Error: {error}
      <button onClick={fetchDummyAPI}>Retry</button>
    </div>
  );


  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetchingComponent;