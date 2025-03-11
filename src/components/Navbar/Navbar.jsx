import React from "react";
import "./Navbar.css"; // Import styles
import logo from './logo.png'
import Button from "../Button";
// Function Declaration
export default function Navbar() {
  return (
    <nav className="navbar glass-card">
      {/* Logo or Brand Name */}
      <div className="navbar-brand">
      <img  className="logo-img" src={logo} alt="" />
      </div>
      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <a to="#" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a to="/menu" className="navbar-link">
            Menu
          </a>
        </li>
        <li>
          <a to="/about" className="navbar-link">
            About Us
          </a>
        </li>
        <li>
          <a to="/order" className="navbar-link">
            Order Online
          </a>
        </li>
        <li>
          <a to="/contact" className="navbar-link">
            Contact Us
          </a>
        </li>
      </ul>
      {/* Cart Icon */}
      <div className="navbar-cart">
        <a to="/cart" className="navbar-link">
          🛒 {/* Cart Icon */}
        </a>
        <Button name="login"  width='small'/>
      </div>
    </nav>
  );
}
