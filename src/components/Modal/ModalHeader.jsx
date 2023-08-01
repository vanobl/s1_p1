import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './ModalHeader.module.css'


const ModalHeader = (props) => {
    return(
        <div className={styles.modalHeader}>
            <p className="text text_type_main-large">
                {props.headerText}
            </p>
            <CloseIcon type="secondary" style={{cursor: "pointer"}} className={styles.closeButton} onClick={props.offModal} />
        </div>
    );
}


export default ModalHeader;