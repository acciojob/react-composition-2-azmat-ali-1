import React,{ useState } from "react";

const Modal = ({show, onClose, children}) =>{

    if(!show){
      return null;
    }
  
    return (
      <div className="modal-overlay" onClick={onClose}>
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
          {children}
      </div>
    );
};

export default Modal;