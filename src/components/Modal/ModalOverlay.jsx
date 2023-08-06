import React from "react";
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  return(
    <div className={styles.modalOvelay} onClick={props.offModal}>
        {props.children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  offModal: PropTypes.func
};

export default ModalOverlay;