import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ isDarkMode, setIsDarkMode }) {
  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <h1>Amit Kumar</h1>
      <ul>
        <li>
          <NavLink to="/">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      {/* Toggle button at bottom of the sidebar */}
      <button className="theme-toggle" onClick={handleToggle}>
        {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </nav>
  );
}

export default Navbar;