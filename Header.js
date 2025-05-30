import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Blog Platform</h1>
      <nav className="nav">
        <Link to="/blogs">
          <button className="nav-button">Blog List</button>
        </Link>
        <Link to="/blogs/create">
          <button className="nav-button">Create Blog</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
