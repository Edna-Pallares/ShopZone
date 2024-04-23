import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Account from "./components/account/Account";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Password from "./components/password/Password";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import AddProducts from "./components/addproducts/AddProducts";
import Button from "./components/cartbutton/CartButton";
import CardList from "./components/addproducts/CardList";
import CardBody from "./components/cards/CardBody";
import Categories from "./components/categories/Categories";
import SingleProduct from "./components/singleproduct/SingleProduct";
import SingleCategory from "./components/singlecategory/SingleCategory";
import Footer from "./components/footer/Footer";
import Checkout from "./components/checkout/Checkout";
import { CartProvider } from "./components/cart/CartContext";
import { filterByCategory, filterByPrice } from "./components/filter/Filter";

const App = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching data:", error));

    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const changingSearchData = (ev) => {
    setSearchValue(ev.target.value);
  };

  const handleFilter = () => {
    const filteredItems = filterByCategory(
      filterByPrice(items, 0, 100),
      "electronics"
    );
    setItems(filteredItems);
  };

  const addItem = (item) => {
    item.addNumber = 1;
    setAddedItem([...updatedItems, item]);
  };

  const removeItem = (item) => {
    const updatedItems = addedItems.filter(
      (addedItem) => addedItem.id !== item.id
    );
    setAddedItem(updatedItems);
  };

  const itemsFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <BrowserRouter>
        <Header />
        <CartProvider>
          <Routes>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route
              path="/account"
              element={token ? <Account /> : <Navigate to="/login" />}
            />
            <Route
              path="/register"
              element={<Register setToken={setToken} />}
            />
            <Route path="/password" element={<Password />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/singleproduct" element={<SingleProduct />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cardlist" element={<CardList />} />
            <Route
              path="/categories/:categoryName"
              element={<SingleCategory />}
            />
            <Route
              path="/"
              element={
                <React.Fragment>
                  <div className="body__container">
                    <div className="nav">
                      <div className="nav-right">
                        <Search
                          value={searchValue}
                          onChangeData={changingSearchData}
                          onFilter={handleFilter}
                        />
                        <button
                          className="filter-button"
                          onClick={handleFilter}
                        >
                          Filter
                        </button>
                        <Button
                          num={addedItems.length}
                          click={setShowAddProducts}
                        />
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
                  <Footer />
                </React.Fragment>
              }
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
