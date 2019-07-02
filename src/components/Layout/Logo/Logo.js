import React from "react";
import classes from "./Logo.css";
import burgerLogo from "./burger-logo.png";

export function Logo({ height }) {
  return (
    <div className={classes.Logo} style={{ height }}>
      <img src={burgerLogo} alt="My Burger" />
    </div>
  );
}
