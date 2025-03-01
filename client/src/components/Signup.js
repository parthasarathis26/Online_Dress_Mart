// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import background from '../img/8972379.jpg';
import '../styles/Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email format');
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        await axios.post('http://localhost:5000/api/auth/signup', {
          email,
          password
        });
        alert('Signup Successful');
        navigate('/');
      } catch (error) {
        setError(error.response?.data?.message || 'Server Error');
      }
    }
  };

  return (
    <div className="auth-page" style={{ 
      backgroundImage: `url(${background})`
    }}>
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
