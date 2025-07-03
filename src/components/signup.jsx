// Login.jsx
import React, { useState } from 'react';
import '../assets/css/signup.css';

const SignUp = () => {
  // ...state and logic

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">Sign-Up</h2>
        <input type="email" id="email" name="email"  className="login-input" placeholder="Enter your email" />
        <input type="password"placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Sign-Up</button>
      </form>
    </div>
  );
};

export default SignUp;
