import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import a menu icon
import "./css/Navbar.css";

function Navbar() {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Section: SVG Cous Cous */}
      <div className="navbar-left">
        <h1 className="couscous1 graffiti">Cous</h1>
        <h1 className="couscous2 graffiti">Cous</h1>
      </div>

      {/* Right Section: Menu Icon */}
      <div className="navbar-right">
        <FiMenu size={24} onClick={toggleMenu} />
      </div>

      {/* Pop-Out Menu */}
      {isMenuOpen && (
        <div className="pop-out-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
