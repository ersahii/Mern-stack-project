import React from 'react';
import "./projectIntro.css";
const ProjectIntro = () => {
  return (
    <div className='intro-container'>
      <h1 className='intro'>Introduction</h1>
      <div className='msg-container'>
      <p className='welcome-msg'>
        <h1>Welcome</h1> to my comprehensive web application built using the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. This project encompasses a range of functionalities designed to deliver a robust user experience and efficient backend management.
      </p>
      <div className='welcome-img'>
        <img src='images/mern-img.jfif' alt='mern stack image'/>
      </div>
      </div>
    </div>
  );
};

export default ProjectIntro;
