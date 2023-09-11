import React from "react";
import styles from './ModalOverlay.module.css';
import { useDispatch } from "react-redux";
import hideModalTogle from "../../services/actions/hideModalTogle";

const ModalOverlay = () => {
  const dispatch = useDispatch();

  return(
    <div className={styles.modalOvelay} onClick={() => {dispatch(hideModalTogle());}}>
    </div>
  );
};

export default ModalOverlay;