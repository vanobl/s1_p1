import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import styles from './Modal.module.css'

const Modal = (props) => {
    let modalRoot = document.getElementById("modal-root");

    return ReactDOM.createPortal(
        <ModalOverlay offModal={props.offModal}>
            <div className={styles.modalContent}>
                {props.children}
            </div>
        </ModalOverlay>,
        props.modaPlace,
    );
}

export default Modal;