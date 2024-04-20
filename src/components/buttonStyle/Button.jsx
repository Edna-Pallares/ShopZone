import React from "react";
import "./Button.css";

const Button = ({ num, click }) => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      My Cart
    </button>
  );
};

export default Button;
