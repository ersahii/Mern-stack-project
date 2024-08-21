import React from 'react';
import "../styles/notFoundPage.css";
import { NavLink } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <NavLink to="/" className="home-link">Go to Home</NavLink>
    </div>
  );
};

export default NotFoundPage;
