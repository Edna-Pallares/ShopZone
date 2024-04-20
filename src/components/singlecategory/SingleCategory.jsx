import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCategory = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await response.json();
        setCategoryProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div className="category-products-container">
      <h2>{category}</h2>
      <div className="products-list">
        {categoryProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
