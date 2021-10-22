import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-element"><Link to='/compensate'>Action</Link></li>
        <li className="nav-element"><Link to='/'>Form</Link></li>
        <li className="nav-element"><Link to='/profile'>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;