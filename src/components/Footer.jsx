import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Meet Thakur. All rights reserved.</p>
      <p>Built with React, Vite & Framer Motion</p>
    </footer>
  );
};

export default Footer;
