import React from 'react';
import './SignIn.css';
import Navbar from '../Home/Navbar/Navbar'; // Update path if needed

function SignIn() {
  return (
    <>
      <Navbar />
      <div className="signin-wrapper">
        <div className="signin-box">
          {/* Left */}
          <div className="signin-left">
            <h2>Sign In</h2>
            <form>
              <label htmlFor="username">User Email</label>
              <input type="text" id="useremail" placeholder="Enter your email" />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />

              <button type="submit">Sign In</button>

              <div className="signin-options">
                <a href="#">Forgot Password?</a>
              </div>
            </form>
          </div>

          {/* Right */}
          <div className="signin-right">
            <h2>Welcome to Sign In</h2>
            <p>Don’t have an account?</p>
            <button className="signup-btn" onClick={() => window.location.href='/signup'}>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
