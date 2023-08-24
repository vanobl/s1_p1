import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import hideModalTogle from "../../services/actions/hideModalTogle";

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");
  const dispatch = useDispatch();

  const closeModal = () => {dispatch(hideModalTogle());}

  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === 'Escape') {
        closeModal();
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
            <CloseIcon type="secondary" onClick={() => {closeModal();}} />
          </div>
        </div>
        {props.children}
      </div>
      <ModalOverlay />
    </section>,
    modalRoot
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Modal;