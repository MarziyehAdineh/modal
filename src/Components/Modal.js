import React from "react";
import "./Modal.css";
function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>مطمئنی می خواهی ادامه بدی؟</h1>
        </div>
        <div className="body">
          <p> برای بازدید از فروشگاه، لطفا روی کلید "ادامه" کلیک کنید😍</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancleBtn">
            انصراف
          </button>
          <button>ادامه</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
