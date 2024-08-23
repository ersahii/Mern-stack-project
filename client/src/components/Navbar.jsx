import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../store/auth";
const Navbar =()=>{
    const {isLoggedIn} = useAuth();
    console.log(isLoggedIn);
    return<>
        <header>
            <div className="container-navbar">
                <div className="logo-brand">
                    <NavLink to="/">Mir Mehraj Mushtaq</NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/" className="navLink">Home</NavLink></li>
                        <li><NavLink to="/about" className="navLink">About</NavLink></li>
                        <li><NavLink to="/contact" className="navLink">Contact</NavLink></li>
                        <li><NavLink to="/services" className="navLink">Services</NavLink></li>
                        {isLoggedIn ? <li><NavLink to="/logout" className="navLink">Logout</NavLink></li> :
                        <>
                            <li><NavLink to="/register" className="navLink">Register</NavLink></li>
                            <li><NavLink to="/login" className="navLink">Login</NavLink></li>
                        </>}
                    </ul>
                </nav>
            </div>
        </header>
    </>
}
export default Navbar;