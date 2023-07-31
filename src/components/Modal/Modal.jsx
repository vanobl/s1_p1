import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import ModalHeader from "./ModalHeader";
import styles from './Modal.module.css'

const Modal = (props) => {
    return(
        <div className={styles.modalContent}>
            <ModalHeader headerText="Детали ингредиента" offModal={props.offModal} />
            {props.children}
        </div>
    );
}

export default Modal;