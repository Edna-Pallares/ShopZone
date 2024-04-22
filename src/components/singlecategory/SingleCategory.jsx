import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleCategory.css";
const SingleCategory = () => {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        const data = await response.json();
        setCategoryProducts(data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div>
      <h2 className="category-title">{categoryName}</h2>
      <div className="product-list">
        {categoryProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img
              className="product_img"
              src={product.image}
              alt={product.title}
            />
            <p>{product.description}</p>
            <h4>Price: {product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
