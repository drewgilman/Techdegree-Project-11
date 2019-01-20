import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/legos">Lego</NavLink></li>
        <li><NavLink to="/guitars">Guitar</NavLink></li>
        <li><NavLink to="/fire">Fire</NavLink></li>
      </ul>
    </nav>
  );
};


export default Navigation;
