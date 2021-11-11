import { useState } from "react";
import Modal from "./Components/Modal.js";
import "./App.css";
function App() {
  const [ openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>.سلام، روی دکمه کلیک کنید تا مودال باز شود</h1>
      <button
       className="openModalBtn"
       onClick={() => setOpenModal(true)}>
        کلیک کنید
      </button>
      {openModal && < Modal closeModal={setOpenModal}/>}
    </div>
  );
}
export default App;
