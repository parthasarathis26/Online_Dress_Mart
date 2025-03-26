import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/online-shopping.png';
import cartImg from '../img/icons8-cart-50.png';
import userImg from '../img/user (1).png';
import '../styles/Navbar.css';

const Navigation = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const menuRef = useRef(null);

  useEffect(() => {
    // Get the email from local storage
    const email = localStorage.getItem('userEmail');
    setUserEmail(email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    alert('Logged out successfully');
    navigate('/');
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
      <span className="company-name">P.R. COTTONS</span>
      <div className="search-box">
        <input type="text" placeholder='Search Here'></input>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/men">Mens</Link></li>
        <li><Link to="/women">Womens</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>
      <ul className="navbar-menu1">
        <li>
          <Link to="/cart">
            <img src={cartImg} alt="Cart" className="cart-icon" />
          </Link>
        </li>
        <li className="user-menu" ref={menuRef}>
          <img 
            src={userImg} 
            alt="User" 
            className="user-icon" 
            onClick={toggleDropdown} 
          />
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>{userEmail ? userEmail : 'Guest'}</li>
              <li><Link to="/contact">Contact</Link></li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
