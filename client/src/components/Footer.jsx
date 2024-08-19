// src/Footer.js

import React from 'react';
import './Footer.css'; // Create this CSS file for styling
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mir Mehraj Mushtaq. All rights reserved.</p>
        <div className="footer-links">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
