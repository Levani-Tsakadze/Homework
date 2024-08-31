import React, { useState, useEffect } from "react";

function AutoIncrementCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Counter: {count}</div>;
}

export default AutoIncrementCounter;
