import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"; 
import logoImage from '../images/Gemini_Generated_Image_1gm7v51gm7v51gm7-removebg-preview.png'; 
import SearchForm from '../buttons/SearchForm';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <div className='logolog'>
            <img src={logoImage} alt="MyLogo" />
          </div>
        </Link>
      </div>

      <div className='search-bar'>
      <SearchForm/>
      </div>
      
      
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
