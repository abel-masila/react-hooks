import React, { useState } from "react";
import "./App.css";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
