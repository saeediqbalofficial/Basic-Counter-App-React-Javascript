import React from "react";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  let [zerovalue, setZeroValue] = useState(false);

  let increamentHandler = () => {
    setCounter(counter + 1);
    console.log("+");
  };

  let decreamentHandler = () => {
    setCounter(--counter);
    console.log("-");
    // console.log(zerovalue);
    // if (counter == 0) {
    //   setZeroValue(true);
    //   console.log(zerovalue);
    //   console.log("Counter Value is : ", counter);
    // }
  };

  let resetHandler = () => {
    setCounter(0);
    console.log("Reseted");
  };

  return (
    <div className="Main">
      <div className="Value">{counter}</div>
      <div className="dev_name">
        <h5 className="dev">Developed by Saeed Iqbal</h5>
      </div>
      <div className="Button">
        <button className="Buttons" onClick={increamentHandler}>
          +
        </button>
        <button className="Buttons" onClick={resetHandler}>
          Reset
        </button>
        <button className="Buttons" onClick={decreamentHandler}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
