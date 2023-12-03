"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>counter: {counter}</h2>
      <button
        className="btn text-blue-500"
        onClick={() => setCounter(counter + 1)}
      >
        incricse
      </button>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter - 1)}
      >
        decricse
      </button>
    </div>
  );
};

export default Counter;
