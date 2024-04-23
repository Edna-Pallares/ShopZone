import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";

const CartButton = () => {
  const { cart } = useCart();

  return (
    <div className="cart-button">
      <Link to="/checkout">
        <button>My Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</button>
      </Link>
    </div>
  );
};

export default CartButton;