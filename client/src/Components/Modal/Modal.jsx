import React from 'react';
import './style.css';

const Modal = ({ setIsOpen, title, content }) => {
  return (
    <div className="modal-backd">
      <div className="modal-containe">
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="modal-footer ">
          <button className="btn btn-secondary m-2" onClick={() => setIsOpen(false)}>Close</button>
          <button className="btn btn-primary ">Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
