
import React from 'react';
import  "./Modal.css";
function Modal({closeModal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <button onClick={()=> closeModal(false)} >X</button>
                </div>
                <div className="title"> </div>
                    <h1>مطمئنی می خواهی ادامه بدی؟</h1>
                <div className="body"> </div>
                    <p>صفحه بعدی عالیه،شما باید به جلو حرکت کنید، شما لذت خواهی برد.</p>
                <div className="footer"> 
                <button onClick={()=> closeModal(false)}  id="cancleBtn">انصراف</button>
                <button>ادامه</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
