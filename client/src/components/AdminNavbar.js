// src/components/AdminNavbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/online-shopping.png';
import userImg from '../img/user (1).png';
import '../styles/Navbar.css';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const [adminEmail, setAdminEmail] = useState('');

  useEffect(() => {
    // Get admin email from localStorage
    const email = localStorage.getItem('adminEmail');
    setAdminEmail(email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminEmail');
    alert('Logged out successfully');
    navigate('/adminlogin');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-box">
        <input type="text" placeholder='Search Here' />
      </div>
      <ul className="navbar-menu">
        <li><Link to="/adminhome">Home</Link></li>
        <li><Link to="/adminadd">Add Product</Link></li>
      </ul>
      <ul className="navbar-menu1">
        <li className="user-menu" ref={menuRef}>
          <img 
            src={userImg} 
            alt="User" 
            className="user-icon" 
            onClick={toggleDropdown} 
          />
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>{adminEmail || 'Admin'}</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
