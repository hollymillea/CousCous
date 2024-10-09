import React from "react";
import { FiMenu } from "react-icons/fi"; // Import a shopping cart icon from react-icons
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section: SVG Cous Cous */}
      <div className="navbar-left">
        <h1 className="couscous1 graffiti">Cous</h1>
        <h1 className="couscous2 graffiti">Cous</h1>
      </div>

      {/* Right Section: Shopping Cart Icon */}
      <div className="navbar-right">
        <FiMenu size={24} />
      </div>
    </nav>
  );
}

export default Navbar;
