// src/components/HireMeButton.js
import './hireMeButton.css'; // Import your CSS for styling
import { NavLink } from 'react-router-dom';
const HireMeButton = () => {
  return (
    <NavLink to="/contact" className="hire-me-button">Hire Me</NavLink>
  );
};

export default HireMeButton;
