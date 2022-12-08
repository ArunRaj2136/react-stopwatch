import React, { useState } from "react";
import "./../App.css";

const Input = () => {
  const [enterInput, setEnterInput] = useState("");

  const inputHandler = (event) => {
    setEnterInput(event.target.value);
  };

  return (
    <div>
      <label htmlFor="time">Enter-Time:</label>
      <input
        type="number"
        id="time"
        onChange={inputHandler}
        value={enterInput}
        className="input"
      ></input>
    </div>
  );
};

export default Input;
