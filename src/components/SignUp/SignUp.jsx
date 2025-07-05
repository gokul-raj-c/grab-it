import React from 'react';
import { useEffect,useState } from "react";
import './SignUp.css'; // Make sure class names in this CSS file match the ones used below
import Navbar from '../Home/Navbar/Navbar';
import { useNavigate } from "react-router-dom"; // use this if using React Router

function SignUp() {
  const initialForm = {
    user_name: "",
    user_email: "",
    user_password: "",
  };

const [formData, setFormData] = useState(initialForm);
const [error, setError] = useState("");

const navigate = useNavigate();
const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    // Clear error for this field
    setError(prev => ({
      ...prev,
      [e.target.name]: ""
    }));
  };

const validateInputs = () => {
    const { user_name, user_email, user_password } = formData;
    const newErrors = {};

    if (!user_name) newErrors.user_name = "Username is required.";
    else if (user_name.length < 3) newErrors.user_name = "Username must be at least 3 characters.";

    if (!user_email) newErrors.user_email = "Email is required.";
    else if (!user_email.includes("@") || !user_email.includes("."))
      newErrors.user_email = "Enter a valid email.";

    if (!user_password) newErrors.user_password = "Password is required.";
    else if (user_password.length < 6) newErrors.user_password = "Password must be at least 6 characters.";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const response = await fetch("http://localhost:8010/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.status === 409) {
        alert("Email already registered.");
      } else if (response.status === 201) {
        alert("Registration successful! Redirecting to login...");
        navigate("/signin");
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="signup-wrapper">
      <Navbar />
      <div className="signup-box">
        {/* Left Side - Sign Up Form */}
        <div className="signup-left">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {error.user_name && <p className="error">{error.user_name}</p>}

            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {error.user_email && <p className="error">{error.user_email}</p>}

            <label htmlFor="user_password">Password</label>
            <input
              type="password"
              name="user_password"
              value={formData.user_password}
              onChange={handleChange}
              placeholder="Create a password"
            />
            {error.user_password && <p className="error">{error.user_password}</p>}

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
