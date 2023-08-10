import React from "react";
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  return(
    <div className={styles.modalOvelay} onClick={props.offModal}>
    </div>
  );
};

ModalOverlay.propTypes = {
  offModal: PropTypes.func.isRequired
};

export default ModalOverlay;