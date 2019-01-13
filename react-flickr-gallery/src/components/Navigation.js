import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/cats">Cats</NavLink></li>
        <li><NavLink to="/dogs">Dogs</NavLink></li>
        <li><NavLink to="/fish">Fish</NavLink></li>
      </ul>
    </nav>
  );
};


export default Navigation;
