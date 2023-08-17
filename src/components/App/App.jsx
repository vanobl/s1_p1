import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { getIngredients } from '../Utils/burger-api';
import { rootReducer } from '../Utils/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function App() {
  const [burgerIngridients, setBurgerIngridients] = useState(null);
  const store = createStore(rootReducer);

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
    <Provider store={store}>
      <section className={styles.app}>
        <AppHeader />

        {burgerIngridients && <>
          <BurgerIngredients ingridients={burgerIngridients} />
          <BurgerConstructor />
        </>}
      </section>
    </Provider>
  );
}

export default App;
