import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function handleReset() {
    setCounter(0);
  }
  return (
      <div className="counter_box">
        <div className="counter_container">
        <h1>Counter App</h1>
        <div>
          <button className="counter_button" onClick={() => setCounter(counter - 1)}>
            -
          </button>
          <button className="counter_button value_button">{counter}</button>
          <button className="counter_button" onClick={() => setCounter(counter + 1)}>
            +
          </button>
        </div>
        <>
          <button className=" counter_button reset_button" onClick={handleReset}>
            Reset
          </button>
        </>
      </div>
      </div>
  );
}
