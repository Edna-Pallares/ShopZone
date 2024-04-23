import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const isProductAdded = addedItems.some((item) => item.id === product.id);
    setIsAdded(isProductAdded);
  }, [addedItems, product]);

  const handleButtonClick = () => {
    if (isAdded) {
      removeItem(product);
    } else {
      addItem(product);
    }
    setIsAdded(!isAdded); 
  };

  return (
    <div className="card">
      <div>
        <img className="card__img" src={product.image} alt="" />
      </div>
      <div>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <div className="card-price-add">
        <span>Price : ${product.price}</span>
        <button
          className={isAdded ? "remove-item-btn" : "add-item-btn"}
          onClick={handleButtonClick}
        >
          {isAdded ? "REMOVE" : "ADD"}
        </button>
      </div>
    </div>
  );
};

export default Card;
