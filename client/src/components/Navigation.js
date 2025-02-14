// src/components/Navigation.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/online-shopping.png';
import '../styles/Navbar.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-box">
        <input type="text" placeholder='Search Here'></input>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/mens">Mens</Link></li>
        <li><Link to="/womens">Womens</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/Liked">Liked</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navigation;
