import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Signed up successfully!');
      navigate('/login');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-box">
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
        <button onClick={handleSubmit}>Sign Up</button>
        <Link to="/login" className="switch-link">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default Signup;
