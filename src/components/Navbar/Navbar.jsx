import React from "react";
import "./Navbar.css"; // Import styles
import logo from "./logo.png";
import Button from "../Button";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

// Function Declaration
export default function Navbar() {
  const navigate = useNavigate()
  function hanleLoginClick(){
    navigate('./login')
  }
  return (
    <nav className="navbar glass-card">
      {/* Logo or Brand Name */}
      <div className="navbar-brand">
        <img className="logo-img" src={logo} alt="" />
      </div>
      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="navbar-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="navbar-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/reservation" className="navbar-link">
            Reservation
          </Link>
        </li>
        <li>
          <Link to="/order" className="navbar-link">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="navbar-link">
            Contact Us
          </Link>
        </li>
      </ul>
      {/* Cart Icon */}
      <div className="navbar-cart">
        <Link to="/cart" className="navbar-link">
          🛒 {/* Cart Icon */}
        </Link>
        <Button onClick={hanleLoginClick} name="login" width="small" />
      </div>
    </nav>
  );
}
