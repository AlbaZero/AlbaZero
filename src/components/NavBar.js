import React, {Component} from 'react';
import NavLink from './NavLink';
import '../assets/navbar.css';

class NavBar extends Component
{

  render() {
    return (
        <nav className="navbar">
          <ul className="nav nav-pills nav-justified">
            <NavLink to="/">Hem</NavLink>
            <NavLink to="/needs">Behov</NavLink>
            <NavLink to="/purchase">Inköp</NavLink>
          </ul>
        </nav>
    );
  }
}

export default NavBar;
