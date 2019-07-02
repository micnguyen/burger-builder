import React from 'react';
import classes from './NavItem.css';

export function NavItem({ href, active, children }) {
  return (
    <li className={classes.NavigationItem}>
      <a className={active ? classes.active : null} href={href}>{children}</a>
    </li>
  );
}
