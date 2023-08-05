import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import ModalOverlay from '../Modal/ModalOverlay';
import ModalHeader from '../Modal/ModalHeader';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import NutritionsList from '../Modal/NutritionsList';
import SpaceCheckIcon from '../Modal/SpaceCheckIcon';

function App() {
  const [burgerIngridients, setBurgerIngridients] = useState(null);
  const [modalActive, setModalActive] = React.useState(false);
  const [modal, setModal] = useState(null);

  
  const modalRoot = document.getElementById("modal-root");

  function createModalOrder(modalBody) {
    return ReactDOM.createPortal(
      <section className={styles.modalWindow}>
        <Modal offModal={offModal}>
          <ModalHeader headerText="" offModal={offModal} />
          <p className="text text_type_digits-large mt-4">{modalBody}</p>
          <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
          <SpaceCheckIcon>
            <CheckMarkIcon type="primary" />
          </SpaceCheckIcon>
          <p className="text text_type_main-medium mt-15 mb-2">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
        </Modal>
        <ModalOverlay offModal={offModal} />
      </section>,
      modalRoot,
    );
  }

  function createModalIngredient(modalBody) {
    return ReactDOM.createPortal(
      <section className={styles.modalWindow}>
        <Modal offModal={offModal}>
          <ModalHeader headerText="Детали ингредиента" offModal={offModal} />
          <img className={styles.modalFullImage} src={modalBody.image_large} alt="изображение товара" />
          <p className={`text_type_main-medium ${styles.paragraph}`}>{modalBody.name}</p>
          <NutritionsList {...modalBody} />
        </Modal>
        <ModalOverlay offModal={offModal} />
      </section>,
      modalRoot,
    );
  }

  function onModal(modalType, body) {
    if(modalType === 'ingredient'){
      setModal(createModalIngredient(body));
    } else {
      setModal(createModalOrder(body));
    }
    setModalActive(true);
  }

  function offModal() {
    setModalActive(false);
  }

  function getData() {
    fetch("https://norma.nomoreparties.space/api/ingredients").then(
      response => response.json()
    ).then((data) => {
      let res = data.data.reduce((acc, curVal) => {
        let type = curVal.type;
        if(!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(curVal);
        return acc;
      }, {});
      setBurgerIngridients(res);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <section className={styles.app}>
      <AppHeader />

      {burgerIngridients && <BurgerIngredients
        ingridients={burgerIngridients}
        onModal={onModal}
        offModal={offModal}
      />}

      {burgerIngridients && <BurgerConstructor
        ingridients={burgerIngridients}
        onModal={onModal}
        offModal={offModal}
      />}
      {modalActive && modal}
    </section>
  );
}

export default App;
