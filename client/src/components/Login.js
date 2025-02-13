// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../img/2489626.jpg';
import '../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      setError('Email is required');
    } else if (password.trim() === '') {
      setError('Password is required');
    } 
    else {
      setError('');
      alert('Login Successful');
      navigate('/home');
    }
  };

  return (
    <div className="auth-page" style={{ 
      backgroundImage: `url(${background})`
    }}>
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/">Signup</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
