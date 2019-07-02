import React from 'react';
import classes from './Nav.css';

export function Nav({ desktopOnly, children }) {
  return (
    <nav className={desktopOnly ? classes.DesktopOnly : null}>
      <ul className={`${classes.NavItems}`}>
        {children}
      </ul>
    </nav>
  );
}
