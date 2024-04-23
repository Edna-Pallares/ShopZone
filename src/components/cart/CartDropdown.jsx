import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";

const CartDropdown = () => {
  const { cart } = useCart();

  return (
    <div className="cart-dropdown">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default CartDropdown;
