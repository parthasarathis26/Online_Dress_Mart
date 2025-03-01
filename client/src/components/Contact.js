// src/components/Contact.js
import React from 'react';
import Navigation from './Navigation';
import '../styles/Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <>
      <Navigation />
      <div className="contact-content">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="send-button">Send</button>
          </form>

          <div className="contact-details">
            <h3>Contact Details</h3>
            <p>Email: dressmart@gmail.com</p>
            <p>Phone No: 9360837311</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
