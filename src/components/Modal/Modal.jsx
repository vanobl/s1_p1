import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import ModalHeader from "./ModalHeader";
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <section className={styles.modalWindow}>
      <div className={styles.modalContent}>
        <ModalHeader headerText={props.header} offModal={props.offModal} />
        {props.children}
      </div>
      <ModalOverlay offModal={props.offModal} />
    </section>,
    modalRoot
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  offModal: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Modal;