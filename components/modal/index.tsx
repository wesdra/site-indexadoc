
import React, { useState } from "react";
import styles from '../../styles/Modal.module.css'
import Video from "../video";

interface ModalPropos {
  setIsOpen: (value: boolean) => void
}


const Modal = () => {


  const [isOpen, setIsOpen] = useState(false);

  const Props = { 
    control: isOpen
  }

  return (
    <>
      {/* <button className={styles.btnControlModal} onClick={() => setIsOpen(true)}> Open Modal  </button> */}

        <button className={styles.btnControlModal} onClick={() => setIsOpen(true)}>
					<img src={"/play.png"} width={80} alt="Play" />
				</button>


      {isOpen && (
        <>
          {/* <div className={styles.overlay} onClick={() => setIsOpen(false)} /> */}
          {/* <button className={styles.overlay} onClick={() => setIsOpen(false)} /> */}
          <div className={styles.modal} onClick={() => setIsOpen(false)}></div>
          <div className={styles.modalMain} >

            <Video { ...Props} />
          </div>
             <button type="button" className={styles.closeBtn} onClick={() => setIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M6 18L18 6"></path></svg></button>

        </>
      )}


    </>
  )
}

export default Modal;

// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// //import { CSSTransition } from "react-transition-group";
// import "./style.css";

// const Modal = (props:any) => {
//   const closeOnEscapeKeyDown = e => {
//     if ((e.charCode || e.keyCode) === 27) {
//       props.onClose();
//     }
//   };

//   useEffect(() => {
//     document.body.addEventListener("keydown", closeOnEscapeKeyDown);
//     return function cleanup() {
//       document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
//     };
//   }, []);

//   return ReactDOM.createPortal(
//     <div
//       in={props.show}
//       unmountOnExit
//       timeout={{ enter: 0, exit: 300 }}
//     >
//       <div className="modal" onClick={props.onClose}>
//         <div className="modal-content" onClick={e => e.stopPropagation()}>
//           <div className="modal-header">
//             <h4 className="modal-title">{props.title}</h4>
//           </div>
//           <div className="modal-body">{props.children}</div>
//           <div className="modal-footer">
//             <button onClick={props.onClose} className="button">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>,
//     document.getElementById("root")
//   )
// }

// export default Modal;