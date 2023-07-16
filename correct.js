//correct

// AppComponent.js

import React, { useState, useEffect, useMemo, useCallback } from "react";

const AppComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const squaredCount = useMemo(() => {
    return Math.pow(count, 2);
  }, [count]);

  const cubedCount = useMemo(() => {
    return Math.pow(count, 3);
  }, [count]);

  useEffect(() => {
    console.log("Squared count:", squaredCount);
  }, [squaredCount]);

  return (
    <div key={count}>
      <h1>{count}</h1>
      <h2>{squaredCount}</h2>
      <h3>{cubedCount}</h3>

      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default React.memo(AppComponent);
