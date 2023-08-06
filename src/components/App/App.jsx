import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
// import {getData} from '../Utils/burger-api';

function App() {
  const [burgerIngridients, setBurgerIngridients] = useState(null);

  function getData() {
    fetch("https://norma.nomoreparties.space/api/ingredients").then(
      response => response.json()
    ).then((data) => {
      let res = data.data.reduce((acc, curVal) => {
        let type = curVal.type;

        if (!acc[type]) {
          acc[type] = [];
        }

        acc[type].push(curVal);
        return acc;
      }, {});
      setBurgerIngridients(res);
    }).catch(err => alert(err))
  }

  useEffect(() => {
    getData();
    // let res = getData();
    // setBurgerIngridients(res);
  }, [])

  return (
    <section className={styles.app}>
      <AppHeader />

      {burgerIngridients && <BurgerIngredients
        ingridients={burgerIngridients}
      />}

      {burgerIngridients && <BurgerConstructor
        ingridients={burgerIngridients}
      />}
    </section>
  );
}

export default App;
