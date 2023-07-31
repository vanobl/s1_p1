import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import ModalOverlay from '../Modal/ModalOverlay';

function App() {
  const [burgerIngridients, setBurgerIngridients] = useState(null);
  const [modalActive, setModalActive] = React.useState(false);
  const [modal, setModal] = useState(null);

  
  const modalRoot = document.getElementById("modal-root");

  function createModalWindow(modalBody) {
    return ReactDOM.createPortal(
      <section className={styles.modalWindow}>
        <Modal offModal={offModal}>
          <img src={modalBody.image_large} alt="изображение товара" />
          <p className="text text_type_main-medium" style={{width: 520, marginLeft: 100, textAlign: 'center', marginTop: 16, marginBottom: 32}}>{modalBody.name}</p>
          <section style={{width: 520, height: 56, display: 'flex', justifyContent: 'space-around', marginLeft: 100, marginBottom: 60}}>
            <div style={{textAlign: 'center'}}>
              <p className="text text_type_main-default">Калории, ккал.</p>
              <p className="text text_type_digits-default">{modalBody.calories}</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className="text text_type_main-default">Белки, г.</p>
              <p className="text text_type_digits-default">{modalBody.proteins}</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className="text text_type_main-default">Жиры, г.</p>
              <p className="text text_type_digits-default">{modalBody.fat}</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <p className="text text_type_main-default">Углеводы, г.</p>
              <p className="text text_type_digits-default">{modalBody.carbohydrates}</p>
            </div>
          </section>
        </Modal>
        <ModalOverlay offModal={offModal} />
      </section>,
      modalRoot,
    );
  }

  function onModal(header, body) {
    setModal(createModalWindow(body));
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
      <BurgerIngredients ingridients={burgerIngridients ? burgerIngridients : null} onModal={onModal} offModal={offModal} />
      <BurgerConstructor />
      {modalActive && modal}
    </section>
  );
}

export default App;
