
import React,{useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [showModal, setModalShow] = useState(false);

  function handleCloseModal() {
    setModalShow(false);
  }

  return (
    <div id="main">
       <button onClick={()=>setModalShow(true)}>Open Modal</button>
       <Modal show={showModal} onClose={handleCloseModal}>
          <div className="modal">
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
       </Modal>
    </div>
  )
}

export default App