import React from "react";
import "./../App.css";

const Button = (props) => {
  return (
    <button type={props.type} className="btn">
      {props.name}
    </button>
  );
};

export default Button;
