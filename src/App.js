import React, { useMemo } from "react";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [weight, setWeight] = useState(70);

  const [height, setHeight] = useState(154);

  function onWeightChange(event) {
    setWeight(event.target.value);
    console.log(weight);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
    console.log(height);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center min-h-screen bg-red-200 ">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold underline text-red-600">BMI Calculator</h1>
            <div className="weight pt-4">
              <p className="slider-output">Weight:{weight}</p>
              <input
                className="input-slider"
                type="range"
                step="1"
                min="30"
                max="200"
                onChange={onWeightChange}
              />
            </div>
            <div className="height">
              <p className="slider-output">Height:{height}</p>
              <input
                className="input-slider"
                type="range"
                step="1"
                min="70"
                max="200"
                onChange={onHeightChange}
              />
            </div>

            <div className="output-section">
              <p>Your BMI Is:</p>
              <div className="border-2 bg-red-200 p-1 rounded-md">
              <p className="output">{output}</p>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
