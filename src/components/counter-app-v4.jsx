import React from "react";

export function CounterAppFunction() {
  // inisialisai nilai awal state
  // Mengembalikan 2 value,
  // yang pertama: State
  // yang kedua: function yang digunakan untuk update state
  const [state, updateState] = React.useState(0);

  const handleIncrement = (inc) => {
    updateState(state + inc);
  };

  return (
    <div>
      <p>Counter: {state}</p>
      <button onClick={() => handleIncrement(2)}>Increment</button>
      <button onClick={() => handleIncrement(-2)}>Decrement</button>
    </div>
  );
}
