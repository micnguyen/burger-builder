import React, { useState } from 'react';

import { Logo } from './Logo';
import { Nav, NavItem } from './Nav';

import classes from './Layout.css';
import toolbarClasses from './Toolbar.css';
import sideDrawerClasses from './SideDrawer.css';
import drawerToggleClasses from './DrawerToggle.css';

function DrawerToggle({ onClick }) {
  return (
    <div onClick={onClick} className={drawerToggleClasses.DrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
}

function SideDrawer({ isOpen, onClickClose }) {
  const attachedClasses = isOpen
    ? [sideDrawerClasses.SideDrawer, sideDrawerClasses.Open]
    : [sideDrawerClasses.SideDrawer, sideDrawerClasses.Close];

  return (
    <>
      {isOpen ? (
        <div className={sideDrawerClasses.Backdrop} onClick={onClickClose} />
      ) : null}
      <div className={attachedClasses.join(' ')}>
        <div className={sideDrawerClasses.Logo}>
          <Logo />
        </div>

        <Nav>
          <NavItem href="/" active>Burger Builder</NavItem>
          <NavItem href="/">Checkout</NavItem>
        </Nav>
      </div>
    </>
  );
}

function Toolbar({ onToggleDrawer }) {
  return (
    <header className={toolbarClasses.Toolbar}>
      <DrawerToggle onClick={onToggleDrawer} />
      <div className={toolbarClasses.Logo}>
        <Logo />
      </div>
      <Nav desktopOnly>
        <NavItem href="/" active>Burger Builder</NavItem>
        <NavItem href="/">Checkout</NavItem>
      </Nav>
    </header>
  );
}

export function Layout({ children }) {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <Toolbar onToggleDrawer={() => setShowDrawer(!showDrawer)} />
      <SideDrawer
        isOpen={showDrawer}
        onClickClose={() => setShowDrawer(false)}
      />
      <main className={classes.Content}>{children}</main>
    </>
  );
}
