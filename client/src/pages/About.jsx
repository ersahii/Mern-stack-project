// src/components/Profile.js

import React from 'react';
import "../styles/AboutSection.css"
import HireMeButton from '../components/HireMeButton';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  return (
    <div className="profile-container">
      <div className="personal-details">
      <ProfileCard/>
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
