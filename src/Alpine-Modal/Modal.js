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
              <img src="https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modal Image" />
            </div>
            <h1>
            <em>Hi Alpha here this is virtual curtain, style in world full of Animation,/em>
            </h1>
            <button onClick={closeModal}>Let's Go back</button>
          </div>
        </div>
      )}

      <button onClick={openModal}>Click me!</button>
    </>
  );
}



