import React from 'react';
import "../styles/HomePage.css";
import About from './About';
import PackagesCard from '../components/PackagesCard';
import ProjectIntro from '../components/ProjectIntro';
import ProjetOverview from '../components/ProjectOverview';
import TechnologyStack from '../components/TechnologyStack';
const Home = () => {
    return (
        <>
            <div className="home-container">
                {/* <div className="main-home-container">
                <img src="images/mehraj.jpg" alt="" className='brand-image'/>
                <h1 className='brand-name'>Mir Mehraj Mushtaq</h1>
                <p className='brand-skills'>Mern Stack Developer</p>
            </div> */}
            <section className='intro-project'>
                <ProjectIntro/>
            </section>
            <section className='overview-project'>
                <ProjetOverview/>
            </section>
            <section className='technology-stack'>
                <TechnologyStack/>
            </section>
                <section className='packages-section'>
                <h1 className='packages-heading'>PACKAGES USED IN THE PROJECT</h1>
                    <div className='npm-cards'>
                        <PackagesCard />
                        <PackagesCard />
                        <PackagesCard />
                        <PackagesCard />
                    </div>
                </section>
                {/* <About /> */}
            </div>
        </>
    );
};
export default Home;
