import React, { useState } from "react";
import math from "mathjs";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const evaluate = () => {
    try {
      setResult(math.evaluate(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  const handleTrigFunction = (func) => {
    try {
      const radians = math.evaluate(`(${input}) * (Math.PI / 180)`);
      const trigResult = math.evaluate(`Math.${func}(${radians})`);
      setResult(trigResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly className="input-field" />
      <div className="button-container">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={evaluate}>=</button>
        <button onClick={clear} className="clear-button">
          C
        </button>
        <button onClick={() => handleTrigFunction("sin")}>sin</button>
        <button onClick={() => handleTrigFunction("cos")}>cos</button>
        <button onClick={() => handleTrigFunction("tan")}>tan</button>
      </div>
      <div className="result">{result && <div>Result: {result}</div>}</div>
    </div>
  );
}

export default Calculator;
