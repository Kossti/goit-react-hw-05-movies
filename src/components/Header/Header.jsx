import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header>
      <nav className={css.headerNav}>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.link}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/movies'}
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.link}`
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
