import React from 'react';
import './SignIn.css';
import { useEffect,useState } from "react";
import Navbar from '../Home/Navbar/Navbar'; // Update path if needed
import { useNavigate } from "react-router-dom"; // use this if using React Router

function SignIn() {

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
    const newErrors = {};
    if (!formData.user_email) newErrors.user_email = "Email is required.";
    if (!formData.user_password) newErrors.user_password = "Password is required.";
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const response = await fetch("http://localhost:8010/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.status === 200) {
        if (result.role === "admin") {
          alert("Welcome Admin!");
          navigate("/admin");
        } else {
          alert(`Welcome ${result.user_name}!`);
          navigate("/user", { state: { email: formData.user_email } });
        }
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signin-wrapper">
        <div className="signin-box">
          {/* Left */}
          <div className="signin-left">
            <h2>Sign In</h2>
           <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              value={formData.user_email}
              onChange={handleChange}
            />
            {error.user_email && <p className="error">{error.user_email}</p>}

            <label>Password</label>
            <input
              type="password"
              name="user_password"
              placeholder="Enter your password"
              value={formData.user_password}
              onChange={handleChange}
            />
            {error.user_password && <p className="error">{error.user_password}</p>}

            <button type="submit">Login</button>
            <div className="signin-options">
              <a href="/signup">Don't have an account?</a>
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
