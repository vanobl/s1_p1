import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './ModalHeader.module.css';
import PropTypes from 'prop-types';


const ModalHeader = (props) => {
  return(
    <div className={styles.modalHeader}>
      <p className="text text_type_main-large">
          {props.headerText}
      </p>
      <div className={styles.closeButton}>
          <CloseIcon type="secondary" onClick={props.offModal} />
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  headerText: PropTypes.string,
  offModal: PropTypes.func
};


export default ModalHeader;