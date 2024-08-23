import { useAuth } from '../store/auth';
import React, { useState } from 'react';
import "../styles/LoginForm.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const navigate = useNavigate();
    const {isLoggedIn} = useAuth();
    const {storeTokenToLocalStorage} = useAuth();
    const handleSubmit = async (e) => {
        // Handle form login logic here
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:3000/api/auth/login`,{
                method: "POST" , 
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(formData),
            })
            // console.log("response:" , response);
            if(response.ok){
                const resData = await response.json();
                storeTokenToLocalStorage(resData.token);
                setFormData({
                    email: '',
                    password: ''
                });
                alert(`Logged in successfully`);
                navigate("/");
            }
            else{
                navigate("/login");
            }
            
        } catch (error) {
            console.log("login error: " , error)
        }
    };

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
