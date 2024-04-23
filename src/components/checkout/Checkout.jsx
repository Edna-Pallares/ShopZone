import React from "react";
import { useCart } from "../cart/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useCart();

  return (
    <div>
      <h1>ADDED TO CART</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="checkout-item">
            <img src={item.image} alt={item.title} className="checkout-image" />
            <div>
              <p>
                <strong>{item.title}</strong>
              </p>
              <p>
                Price: ${item.price} x {item.quantity}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => alert("Order submitted!")}>Submit Order</button>
    </div>
  );
};

export default Checkout;
