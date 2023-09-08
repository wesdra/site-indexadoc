
import React, { useState } from "react";
import styles from '../../styles/Modal2.module.css'
import Video2 from "../video2";

interface ModalPropos {
  setIsOpen: (value: boolean) => void
}


const Modal2 = () => {


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

            <Video2 { ...Props} />
          </div>
             <button type="button" className={styles.closeBtn} onClick={() => setIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M6 18L18 6"></path></svg></button>

        </>
      )}


    </>
  )
}

export default Modal2;
