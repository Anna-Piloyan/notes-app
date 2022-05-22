import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import {Link,  NavLink } from 'react-router-dom'

const setActive = ({isActive}) => (isActive ? 'active' : '')




const classes = `brand-logo right ${setActive}`

const Menu = () => (
    <nav>
      <div className="nav-wrapper">
      <Link to="/about" className="brand-logo right">Logo</Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink className={setActive} to="/about">About</NavLink></li>
          <li><NavLink className={setActive} to="/notes">Notes</NavLink></li>
          <li><NavLink className={setActive} to="/todo">Todo</NavLink></li>
        </ul>
      </div>
  </nav>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
