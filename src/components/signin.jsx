// Login.jsx
import React, { useState } from 'react';
import '../assets/css/signin.css';

const SignIn = () => {
  // ...state and logic

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">Login</h2>
        <input type="email" id="email" name="email"  className="login-input" placeholder="Enter your email" />
        <input type="password"placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
