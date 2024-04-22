import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoGo from '../../assets/logo.png';
import "./Header.css"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Assuming token is stored in localStorage
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={LoGo} alt="Shop Zone Logo" />
      </div>
      <div className="header__logo-container">
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
            <Link to="/categories" className="header__nav-link">
              Categories
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="header__nav-item">
                <Link to="/account" className="header__nav-link">
                  Account
                </Link>
              </li>
              <li className="header__nav-item">
                <button onClick={handleLogout} className="header__nav-link">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="header__nav-item">
                <Link to="/login" className="header__nav-link">
                  Login
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/register" className="header__nav-link">
                  Create Account
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
