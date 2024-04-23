// Checkout.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../cart/CartContext";

const Checkout = () => {
  const { cart } = useCart();
  const { cartId } = useParams();

  return (
    <div>
      <h1>MY CART</h1>
      <h2>Items{cartId}</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={() => alert("Order submitted!")}>Submit Order</button>
    </div>
  );
};

export default Checkout;
