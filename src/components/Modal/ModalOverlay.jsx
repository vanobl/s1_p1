import React from "react";
import styles from './ModalOverlay.module.css'

const ModalOverlay = (props) => {
    return(
        <div className={styles.modalOvelay} onClick={props.offModal}>
            {props.children}
        </div>
    );
}

export default ModalOverlay;