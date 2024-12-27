import React from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css"; // Adjust the path if needed

const SignupPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Vitals</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Features</Link>
            <Link to="#">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="auth-section">
          <div className="auth-container">
            <div className="form-container">
              <h2>Sign Up</h2>
              <form>
                <label htmlFor="signup-name">Name:</label>
                <input type="text" id="signup-name" required />

                <label htmlFor="signup-email">Email:</label>
                <input type="email" id="signup-email" required />

                <label htmlFor="signup-password">Password:</label>
                <input type="password" id="signup-password" required />

                <label htmlFor="signup-confirm-password">Confirm Password:</label>
                <input type="password" id="signup-confirm-password" required />

                <button type="submit" className="btn submit">Sign Up</button>
              </form>
              <p className="loginRedirect">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Vitals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
