import "./projectOverview.css";
const ProjetOverview = () => {
    return (<>
        <h2 className='intro'>Project Overview</h2>
            <p className="overview-desc">Our application features a well-structured and intuitive user interface, with the following key components:</p>
        <div className="overview">
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">1. Login Page</span></h3>
                    <p className="overview-para"> Secure access to the application is facilitated through a user-friendly login page, allowing authenticated users to enter their credentials and gain entry to the system.</p>
            </div>
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">2. Register Page</span></h3>
                    <p className="overview-para"> New users can easily create an account through a streamlined registration page, which captures essential information and integrates seamlessly with our backend to handle user data securely.</p>
            </div>
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">3. Services Page</span></h3>
                    <p className="overview-para"> This page provides detailed information about the various services offered. Users can browse and interact with the service offerings, enhancing their understanding and engagement with our platform.</p>
            </div>
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">4. Contact Page</span></h3>
                    <p className="overview-para">  A dedicated contact page enables users to reach out for support or inquiries, ensuring open lines of communication and efficient handling of user feedback.</p>
            </div>
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">5. Logout Functionality</span></h3>
                    <p className="overview-para"> Users can securely log out of their accounts, ensuring that their sessions are properly terminated and their personal information remains protected.</p>
            </div>
                <div className="overview-item">
                    <h3 className="overview-heading"> <span className="overview-num">6. Admin Dashboard</span></h3>
                    <p className="overview-para">The admin dashboard is a powerful tool designed for administrators to manage users and services.</p>
            </div>
        </div>
    </>)
}
export default ProjetOverview;