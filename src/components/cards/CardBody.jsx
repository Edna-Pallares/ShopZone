import React, { useState } from "react";
import Card from "./Card";
import "./CardBody.css";

const CardBody = ({ products }) => {
  const [addedItems, setAddedItems] = useState([]);

  const addItem = (item) => {
    setAddedItems([...addedItems, item]);
  };

  const removeItem = (item) => {
    const updatedItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItems(updatedItems);
  };

  return (
    <div className="card__body">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default CardBody;
