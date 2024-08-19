import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar =()=>{
    return<>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <a href="/">Mir Mehraj Mushtaq</a>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/" className="navLink">Home</NavLink></li>
                        <li><NavLink to="/about" className="navLink">About</NavLink></li>
                        <li><NavLink to="/contact" className="navLink">Contact</NavLink></li>
                        <li><NavLink to="/services" className="navLink">Services</NavLink></li>
                        <li><NavLink to="/register" className="navLink">Register</NavLink></li>
                        <li><NavLink to="/login" className="navLink">Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}
export default Navbar;