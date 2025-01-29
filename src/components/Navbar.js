import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Amit Kumar</h1>
      <ul>
        <li>
          {/* “/” → About Me */}
          <NavLink
            to="/"
            style={{ display: 'block', margin: '0.5rem 0' }}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={{ display: 'block', margin: '0.5rem 0' }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={{ display: 'block', margin: '0.5rem 0' }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;