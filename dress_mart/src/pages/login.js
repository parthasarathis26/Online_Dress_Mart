import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    setError('');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email address');
      return false;
    }
    if (password.trim() === '') {
      setError('Password cannot be empty');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Logged in successfully!');
      navigate('/signup');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-box">
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
        <button onClick={handleSubmit}>Login</button>
        <Link to="/signup" className="switch-link">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
