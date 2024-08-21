import "../styles/RegistrationForm.css"
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phoneNo: '',
    email: ''
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    try { 
      const response = await fetch(`http://localhost:3000/api/auth/register`,{
        method:"POST",
        headers : {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(formData)
      });
      if(response.ok){
        setFormData({
          username: '',
          password: '',
          phoneNo: '',
          email: ''
        })
        navigate("/login");
      }
    }catch (error) {
      console.log("register error:", error)
    }
  }
  return (
    <div className="fullsize-container">
      <div className="form-wrapper">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

