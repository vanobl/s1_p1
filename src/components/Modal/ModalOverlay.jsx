import React from "react";
import styles from './ModalOverlay.module.css'

const ModalOverlay = (props) => {
    return(
        <div className={styles.modalOvelay}>
            {props.children}
        </div>
    );
}

export default ModalOverlay;