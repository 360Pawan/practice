import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>
        Value <input type="text" value={count} onChange={handleCountChange} />
      </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
