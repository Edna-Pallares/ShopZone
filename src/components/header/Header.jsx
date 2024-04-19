import React from "react";
import LoGo from "../../assets/logo.png";
import CartLogo from "../../assets/cart-logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import Search from "../search/Search";

const Header = () => {
  return (
    <header>
            <div className="header__logo-container">
        <img className="header__logo" src={LoGo} alt="Shop Zone Logo" />
        <h1>Shop Zone</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
      <div className="cart-container">
        {/* Replace this with your actual cart icon */}
        <span className="cart-count">0</span>
      </div>
    </header>
  );
};

export default Header;
