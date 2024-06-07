import React from 'react';
import "../header/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#home">
          <div className='logolog'>
          <img src='../components\images\Gemini_Generated_Image_1gm7v51gm7v51gm7-removebg-preview.png' alt="MyLogo" />
        
          </div>
       </a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Go</button>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
