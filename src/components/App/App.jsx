import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';

function App() {
  const [burgerIngridients, setBurgerIngridients] = useState(null);
  const [modalActive, setModalActive] = React.useState(false);
  
  const modalRoot = document.getElementById("modal-root");

  let modal;

  function onModal(header, body) {
    console.log('Заголовок: ' + header);
    console.log('Тело: ' + body);
    modal = (<Modal modaPlace={modalRoot} />)
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
