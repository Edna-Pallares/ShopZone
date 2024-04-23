import React, { useState } from "react";
import CartDropdown from "../cart/CartDropdown"; // Adjusted import path

const CartButton = ({ num }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="cart-button">
      <button className="ui-change-btn" onClick={toggleDropdown}>
        My Cart ({num})
      </button>
      {isDropdownOpen && <CartDropdown />}
    </div>
  );
};

export default CartButton;
