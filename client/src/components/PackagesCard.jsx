import React from 'react';
import './PackagesCard.css'; // Import the CSS file for styling

const PackagesCard = () => {
  return (
    <div className="packages-card">
      <div className='upper-half'>
        <img src='/images/npmLogo.png' className='package-image'></img>
      </div>
      <div className='lower-half'>
        <p className='package-name'>Package Name</p>
        <p className="package-link">
          npm install express
        </p>
        <button className='packages-btn'>Documentation</button>
      </div>
    </div>
  );
};

export default PackagesCard;
