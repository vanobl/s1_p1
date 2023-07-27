import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  const [burgerIngridients, setBurgerIngridients] = useState(null);
  const [valueForModal, setValueForModal] = useState(null);
  
  const modalRoot = document.getElementById("modal-root");

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

  function viewModalCreateClient() {
    setValueForModal(<ClientForm setData={getData} />);
    setModalActive(true);
  }

  return (
    <section className={styles.app}>
      <AppHeader />
      <BurgerIngredients ingridients={burgerIngridients ? burgerIngridients : null}/>
      <BurgerConstructor />
    </section>
  );
}

export default App;
