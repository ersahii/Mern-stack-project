import React from 'react';
import '../styles/AboutSection.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Using react-icons for social media icons
const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-content">
                    <img
                        src="/images/mehraj.jpg" // Replace with your image URL
                        alt="Mir Mehraj Mushtaq"
                        className="profile-image"
                    />
                    <div className="text-content">
                        <h1>Mir Mehraj Mushtaq</h1>
                        <p className="role">MERN Stack Developer</p>
                        <p>
                            Hi! I'm Mir Mehraj Mushtaq, a passionate MERN Stack Developer with experience in creating dynamic web applications using MongoDB, Express.js, React, and Node.js.
                        </p>
                        <div className="social-media">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaTwitter />
                            </a>
                        </div>
                        <a href="#contact" className="hire-me-button">Hire Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
