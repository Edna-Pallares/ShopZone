import { Routes, Route } from "react-router-dom";
import Account from "./Account";
import AllCategories from "./AllCategories";
import AllProducts from "./AllProducts";
import Cart from "./Cart";
import ComfirmOrder from "./ConfirmOrder";
import Login from "./Login";
import Register from "./Register";
import SingleCategory from "./SingleCategory";
import SingleBook from "./SingleProduct";

export default function NavRoutes({ token, setToken }) {
  return (
    <div id="nav-routes">
      <Routes>
        <Route
          path="/account"
          element={<Account token={token} setToken={setToken} />}
        />
        <Route
          path="/allProducts"
          element={<AllProducts token={token} setToken={setToken} />}
        />
        <Route
          path="/cart"
          element={<Cart token={token} setToken={setToken} />}
        />
        <Route
          path="/categories"
          element={<Categories token={token} setToken={setToken} />}
        />
        <Route 
        path="/confirmOrder" 
        element={<ComfirmOrder token={token} />} 
        />
        <Route
          path="/"
          element={<HomePage token={token} setToken={setToken} />}
        />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
          <Route
            path="/products/categories/:id"
            element={<SingleCategory token={token} setToken={setToken} />}
          />
        <Route
          path="/products/:id"
          element={<SingleProduct token={token} setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}