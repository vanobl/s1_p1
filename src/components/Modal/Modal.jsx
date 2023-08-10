import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === 'Escape') {
        props.offModal();
      }
    };
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [props]);

  return ReactDOM.createPortal(
    <section className={styles.modalWindow}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <p className="text text_type_main-large">
            {props.header}
          </p>
          <div className={styles.closeButton}>
            <CloseIcon type="secondary" onClick={props.offModal} />
          </div>
        </div>
        {props.children}
      </div>
      <ModalOverlay offModal={props.offModal} />
    </section>,
    modalRoot
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  offModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;