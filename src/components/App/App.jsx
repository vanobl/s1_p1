import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { getIngredients } from '../Utils/burger-api';

function App() {
  const [burgerIngridients, setBurgerIngridients] = useState(null);

async function fillData() {
  try {
    let data = await getIngredients();
    let res = data.data.reduce((acc, curVal) => {
      let type = curVal.type;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(curVal);
      return acc;
    }, {});
    setBurgerIngridients(res);
  } catch (err) {
    alert(err);
  }
}

useEffect(() => {
  fillData();
}, []);

  return (
    <section className={styles.app}>
      <AppHeader />

      {burgerIngridients && <>
        <BurgerIngredients ingridients={burgerIngridients} />
        <BurgerConstructor />
      </>}
    </section>
  );
}

export default App;
