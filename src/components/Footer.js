import React from 'react';
import logo from '../assets/logo3.gif';

const Footer = () => {
  const footerLogo = {
    width: '3rem',
    margin: '0 4rem',
  };

  const link = {
    fontSize: '1rem',
    color: '#000',
    marginLeft: '1rem',
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <div className="footer text-center">
      <small>
        Copyright &copy; Math Magician
        <img
          src={logo}
          alt="Logo"
          className="footer-logo"
          style={footerLogo}
        />
        Created by
        <a href="https://github.com/Leonardoeng13" style={link} target="_blank" rel="noreferrer">Leo de Andrade</a>
      </small>
    </div>
  );
};

export default Footer;
