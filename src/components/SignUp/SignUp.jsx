import React from 'react';
import './SignUp.css'; // Make sure class names in this CSS file match the ones used below
import Navbar from '../Home/Navbar/Navbar';

function SignUp() {
  return (
    <div className="signup-wrapper">
      <Navbar />
      <div className="signup-box">
        {/* Left Side - Sign Up Form */}
        <div className="signup-left">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" />

            <button type="submit">Register</button>

            <div className="signup-options">
              <a href="/signin">Already have an account?</a>
            </div>
          </form>
        </div>

        {/* Right Side - Welcome Message */}
        <div className="signup-right">
          <h2>Welcome!</h2>
          <p>Already a member?</p>
          <button className="signup-btn" onClick={() => window.location.href='/signin'}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
