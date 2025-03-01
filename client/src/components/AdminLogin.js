// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import background from '../img/2489626.jpg';
import '../styles/Auth.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/adminlogin', {
        email,
        password
      });

      // Store token and email in localStorage
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminEmail', email);

      alert('Admin Login Successful');
      navigate('/adminhome');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid Admin Credentials');
    }
  };

  return (
    <div className="auth-page" style={{ 
      backgroundImage: `url(${background})`
    }}>
      <button 
        className="admin-login-button" 
        onClick={() => navigate('/')}
      >
        User Login
      </button>
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
