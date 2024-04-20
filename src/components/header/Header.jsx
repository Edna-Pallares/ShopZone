import React from "react";
import LoGo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

//stop here
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={LoGo} alt="Shop Zone Logo" />
        <h1 className="header__title">Shop Zone</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">
              Home
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/Categories" className="header__nav-link">
              Categories
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/login" className="header__nav-link">
              Login
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/register" className="header__nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
