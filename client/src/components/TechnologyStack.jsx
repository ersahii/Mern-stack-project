import "./projectOverview.css";
const TechnologyStack = () => {
    return (<>
        <h2 className='intro'>Technology Stack</h2>
            <p className="overview-desc">The project utilizes the following technologies:</p>
        <div className="overview">
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">1. MongoDB</span></h3>
                    <p className="overview-para"> A NoSQL database that stores user and service information in a flexible, schema-less format, ensuring efficient data retrieval and management.</p>
            </div>
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">2. Express.js</span></h3>
                    <p className="overview-para"> A minimalist web framework for Node.js that handles server-side logic and routes, providing a robust foundation for building and managing APIs.</p>
            </div>
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">3. React</span></h3>
                    <p className="overview-para">A dynamic front-end library that powers our user interface, delivering a responsive and interactive experience through reusable components and efficient state management.</p>
            </div>
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">4. Node.js</span></h3>
                    <p className="overview-para">The runtime environment that enables server-side scripting and handles asynchronous operations, ensuring smooth and scalable server performance.</p>
            </div>
        </div>
    </>)
}
export default TechnologyStack;