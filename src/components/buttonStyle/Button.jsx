import React from "react";
import "./Button.css";

const Button = ({ num, click }) => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      My Cart <span>{num}</span> {num <= 1 ? "Item" : "Items"}
    </button>
  );
};

export default Button;
