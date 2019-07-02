import React from 'react';
import classes from './Modal.css';

export function Modal({ isOpen, onDismiss, children }) {
  return (
    <>
      {isOpen ? <div className={classes.ModalBackdrop} onClick={onDismiss} /> : null}
      <div
        className={classes.Modal}
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: isOpen ? '1' : '0'
        }}>
        {children}
      </div>
    </>
  );
}
