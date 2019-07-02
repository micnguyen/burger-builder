import React from "react";
import classes from "./Button.css";

export function Button({ kind, onClick, children }) {
  return (
    <button
      className={[classes.Button, classes[kind]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
