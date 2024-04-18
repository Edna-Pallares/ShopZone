import React, { useEffect, useState } from "react";
import "./App.css";
import AddProducts from "./components/addproducts/AddProducts";
import Button from "./components/buttonStyle/Button";
import CardBody from "./components/cards/CardBody";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

const App = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);
  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }
  const itemsFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }
  return (
    <div>
      {/* <Header /> */}
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSearchData}
            />
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>

        {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}
        <CardBody
          products={itemsFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      </div>
    </div>
  );
};

export default App;
