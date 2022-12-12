import React, { useState } from "react";
import "./../App.css";

const Input = (props) => {
  const [enterInput, setEnterInput] = useState("");

  const inputHandler = (event) => {
    setEnterInput(event.target.value);
    props.onGetTime(event.target.value);
  };

  return (
    <div>
      <label className="bold">Enter-Time:</label>
      <input
        type="number"
        onChange={inputHandler}
        value={enterInput}
        className="input"
      ></input>
    </div>
  );
};

export default Input;
