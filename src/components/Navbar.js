import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import a shopping cart icon from react-icons
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section: COUSCOUS */}
      <div className="navbar-left">
        <h1>COUSCOUS</h1>
      </div>

      {/* Center Section: Navigation Links */}
      <div className="navbar-center">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Right Section: Shopping Cart Icon */}
      <div className="navbar-right">
        <FaShoppingCart size={24} />
      </div>
    </nav>
  );
}

export default Navbar;
