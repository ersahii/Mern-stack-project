import React from 'react';
import './PackagesCard.css'; // Import the CSS file for styling

const PackagesCard = () => {
  return (
    <div className="card">
      <img src="images/npmLogo.png" alt="Logo" className="card-logo" />
      <h2 className="card-heading">Package Name</h2>
      <a href="/" className="card-link">
        npm link
      </a>
    </div>
  );
};

export default PackagesCard;
