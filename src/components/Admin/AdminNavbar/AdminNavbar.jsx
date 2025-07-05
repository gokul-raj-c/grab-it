import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./AdminNavbar.css"

const AdminNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session/token here
    navigate("/signin");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/admin" className="brand">GRAB iT - Admin</Link>
      </div>



      <div className="navbar-right" ref={dropdownRef}>
        <div className="admin-profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <FaUserCircle size={28} title="Admin Profile" />
          <span className="admin-name">Admin</span>
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
