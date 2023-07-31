import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './ModalHeader.module.css'


const ModalHeader = (props) => {
    return(
        <div className={styles.modalHeader}>
            <p className="text text_type_main-large" style={{cursor: "pointer"}}>
                {props.headerText}
            </p>
            <CloseIcon type="secondary" className={styles.closeButton} onClick={props.offModal} />
        </div>
    );
}


export default ModalHeader;