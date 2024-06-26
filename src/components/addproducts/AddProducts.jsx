import React from "react";
import { useCart } from "../cart/CartContext";
import "./AddProducts.css";

const AddProducts = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h1>Add Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}{" "}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProducts;