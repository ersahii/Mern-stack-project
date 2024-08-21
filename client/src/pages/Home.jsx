import React from 'react';
import "../styles/HomePage.css";
import About from './About';
const Home = () => {
    return (
        <>
        <div className="home-container">
            <div className="main-home-container">
                <img src="images/mehraj.jpg" alt="" className='brand-image'/>
                <h1 className='brand-name'>Mir Mehraj Mushtaq</h1>
                <p className='brand-skills'>Mern Stack Developer</p>
            </div>
        <About/>
        </div>
        </>
    );
};

export default Home;
