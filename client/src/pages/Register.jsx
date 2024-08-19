import "../styles/RegistrationForm.css"
const Register = () => {
    return <>
        <div className="registration-form-container">
            <h2>Register</h2>
            <form className="registration-form">
                <div className="form-group">
                    <label for="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label for="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    </>
}
export default Register;

