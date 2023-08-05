
import React from "react";
import './../styles/App.css';




import { useState } from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div>
      <div>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <div className="modal-p">{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-overlay">
      <h1>Modal Example</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <p className="modal-p">This is the content inside the modal.</p>
      </Modal>
    </div>
  );
};

export default App;

