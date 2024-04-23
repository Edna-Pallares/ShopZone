import React from "react";
import { useCart } from "../cart/CartContext";
import "./Card.css";

const Card = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isAdded = cart.some((item) => item.id === product.id);

  const handleButtonClick = () => {
    if (isAdded) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="card">
      <div>
        <img className="card__img" src={product.image} alt="" />
      </div>
      <div>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={handleButtonClick}>
          {isAdded ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
