import React, { useState } from 'react';
import './index.css';

export default function Modal() {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal__overlay">
            <div className="modal__overlay__1" />
            <div className="modal__overlay__2" />
          </div>
          <div className="modal__content">
            <div className="modal__image">
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3027&q=80" alt="Modal Image" />
            </div>
            <h1>
            Hi Alpha here this virtual curtain style in world of Animation
            </h1>
            <button onClick={closeModal}>Let's Go back</button>
          </div>
        </div>
      )}

      <button onClick={openModal}>Click me!</button>
    </>
  );
}


