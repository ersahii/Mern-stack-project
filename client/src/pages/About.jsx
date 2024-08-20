// src/components/Profile.js

import React from 'react';
import "../styles/AboutSection.css"

const About = () => {
  return (
    <div className="profile-container">
      <div className="personal-details">
        <img src="images/mehraj.jpg" alt="Profile" className="profile-photo" />
        <h2 className="profile-name">Mir Mehraj Mushtaq</h2>
        <p className="profile-email">Email: mirmehrajmushtaq053@gmail.com</p>
        <p className="profile-phone">Phone: (+91) 7006791254</p>
      </div>

      <div className="about-me">
        <h3>About Me</h3>
        <p>
          Hi, I'm Mir Mehraj Mushtaq, a passionate MERN stack developer with extensive experience in MongoDB, Express.js, React, and Node.js. I specialize in creating dynamic and responsive web applications with a focus on performance and user experience. My journey in the tech field has equipped me with the skills to tackle complex challenges and deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
