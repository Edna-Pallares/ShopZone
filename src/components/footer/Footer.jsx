import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; {new Date().getFullYear()} Shop Zone</p>
      </div>
    </footer>
  );
};

export default Footer;
