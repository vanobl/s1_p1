import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import ModalOverlay from '../Modal/ModalOverlay';
import ModalHeader from '../Modal/ModalHeader';
import octagon_1 from '../../images/octagon_1.png'
import pentagon_2 from '../../images/pentagon_2.png'
import pentagon_3 from '../../images/pentagon_3.png'
import octagonFull from '../../images/octagon_full.png'
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

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
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignContent: 'center', width: '120px', height: '120px', backgroundImage: 'url(' + octagonFull + ')', backgroundSize: '120px 120px', marginLeft: '300px'}}>
            <div style={{position: 'relative', zIndex: '2'}}>
              <CheckMarkIcon type="primary" />
            </div>
          </div>
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
          <img style={{width: '480px', height: '240px'}} src={modalBody.image_large} alt="изображение товара" />
          <p className="text text_type_main-medium" style={{width: 520, marginLeft: 100, textAlign: 'center', marginTop: 16, marginBottom: 32}}>{modalBody.name}</p>
          <section style={{width: 520, height: 56, display: 'flex', justifyContent: 'space-around', marginLeft: 100, marginBottom: 60}}>
            <div style={{textAlign: 'center'}}>
              <p className="text text_type_main-default text_color_inactive">Калории, ккал.</p>
              <p className="text text_type_digits-default text_color_inactive">{modalBody.calories}</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className="text text_type_main-default text_color_inactive">Белки, г.</p>
              <p className="text text_type_digits-default text_color_inactive">{modalBody.proteins}</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className="text text_type_main-default text_color_inactive">Жиры, г.</p>
              <p className="text text_type_digits-default text_color_inactive">{modalBody.fat}</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className="text text_type_main-default text_color_inactive">Углеводы, г.</p>
              <p className="text text_type_digits-default text_color_inactive">{modalBody.carbohydrates}</p>
            </div>
          </section>
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
