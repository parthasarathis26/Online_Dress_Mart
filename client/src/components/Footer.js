import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Address Section */}
        <div className="footer-section">
          <h2>Our Address</h2>
          <p>Ground Floor Room no: 01, Door no:79/1,</p>
          <p>Vaiyapurinagar 1st Cross,</p>
          <p>Karur – 639 006, Tamilnadu, India.</p>
          <p>📞 +91 76392 04449</p>
          <p>📞 +91 98430 56807</p>
          <p>✉️ prcottons@gmail.com</p>
        </div>

        {/* Location Section */}
        <div className="footer-section">
          <h2>Our Location</h2>
          <iframe
            title="Google Map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0178936820403!2d78.06514617485975!3d10.962020689198214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f0028a069ab%3A0xbc625510d9394fc8!2sP.R.COTTONS!5e0!3m2!1sen!2sin!4v1740848549609!5m2!1sen!2sin" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="footer-section">
          <h2>Mail Us</h2>
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 Asian Fabricx. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
