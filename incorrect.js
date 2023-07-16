//incorrect

import React, { useState } from 'react';

function App() {
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const squaredCount = useMemo(() => {
    return count ** 2; 
  }, []);

  const cubedCount = () => {
    return count * 3;
  }, [count]);

    useEffect(() => {
    console.log("Squared count:", squaredCount);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      {count > 10 && <h2>{squaredCount}</h2>}

      <h3>{cubedCount}</h3>

      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
