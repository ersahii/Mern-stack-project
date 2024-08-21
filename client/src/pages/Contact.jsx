// src/ContactPage.js
import React, { useState } from 'react';
import "../styles/ContactPage.css"
function Contact() {
    // State for form fields
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    // Handle form field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // For now, we'll just log the data
        console.log('Form data submitted:', formData);

        // Clear form fields (optional)
        // setFormData({
        //     username: '',
        //     email: '',
        //     message: ''
        // });
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
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
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
