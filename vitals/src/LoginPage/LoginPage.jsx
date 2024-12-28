import React from "react";
import { Link } from "react-router-dom"; 
import './LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="loginContainer">
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
              <h2>Login</h2>
              <form>
                <label htmlFor="login-email">Email:</label>
                <input type="email" id="login-email" required />
                <label htmlFor="login-password">Password:</label>
                <input type="password" id="login-password" required />
                <button type="submit" className="btn submit">Login</button>
              </form>
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Link for sign up */}
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

export default LoginPage;
