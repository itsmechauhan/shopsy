import React from 'react';
import '../App.css';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>🌸 Made with 💖 by <strong>Jyoti Mehra</strong></p>
        <p>&copy; {new Date().getFullYear()} Shopsy. All Rights Reserved.</p>
        <div className="social-links">
          <a 
            href="https://github.com/its-jojo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/jyoti--mehra/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
