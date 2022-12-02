import React from "react";
import "./calculator.css";

import { useState} from "react";

function Calculator() {
  const [choosenNumber, setChoosenNumber] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setChoosenNumber(choosenNumber.concat(e.target.value));
    console.log(e.target.value);
  };
  const handleClear = () => {
    setChoosenNumber(" ");
  };
  const handleCalculate = () => {
    try {
      setChoosenNumber(eval(choosenNumber).toString());
    } catch (err) {
      setChoosenNumber("ERROR");
    }
  };
  const handleDeleteLastDigit = () => {
    setChoosenNumber(choosenNumber.slice(0, -1));
  };
  return (
    <div className="calculatorContainer">
      <div className="calculator">
        <div className="screen ">{choosenNumber}</div>
        <div className="firstLine eachParentElement">
          <button onClick={handleClear} className="clear  forEachElement">
            Clear
          </button>
          <button
            value="*"
            onClick={handleClick}
            className="multiplication forEachElement"
          >
            *
          </button>
        </div>
        <div className="secondLine eachParentElement">
          <button
            value="9"
            onClick={handleClick}
            className="nine forEachElement"
          >
            9
          </button>
          <button
            value="8"
            onClick={handleClick}
            className="eight forEachElement"
          >
            8
          </button>
          <button
            value="7"
            onClick={handleClick}
            className="seven forEachElement"
          >
            7
          </button>
          <button
            value="-"
            onClick={handleClick}
            className="subtraction forEachElement"
          >
            -
          </button>
        </div>
        <div className="thirdLine eachParentElement">
          <button
            value="6"
            onClick={handleClick}
            className="six forEachElement"
          >
            6
          </button>
          <button
            value="5"
            onClick={handleClick}
            className="five forEachElement"
          >
            5
          </button>
          <button
            value="4"
            onClick={handleClick}
            className="four forEachElement"
          >
            4
          </button>
          <button
            value="+"
            onClick={handleClick}
            className="addition forEachElement"
          >
            +
          </button>
        </div>
        <div className="fourthLine eachParentElement">
          <button
            value="3"
            onClick={handleClick}
            className="three forEachElement"
          >
            3
          </button>
          <button
            value="2"
            onClick={handleClick}
            className="two forEachElement"
          >
            2
          </button>
          <button
            value="1"
            onClick={handleClick}
            className="one forEachElement"
          >
            1
          </button>
          <button
            value="/"
            onClick={handleClick}
            className="division forEachElement"
          >
            /
          </button>
        </div>
        <div className="fifthLine eachParentElement">
          <button
            value="0"
            onClick={handleClick}
            className="zero forEachElement"
          >
            0
          </button>
          <button
            value="."
            onClick={handleClick}
            className="decimal forEachElement"
          >
            .
          </button>
          <button
            onClick={handleDeleteLastDigit}
            className="root forEachElement"
          >
            C
          </button>
          <button
            value="="
            onClick={handleCalculate}
            className="equal forEachElement"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
