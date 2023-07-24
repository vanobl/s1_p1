import React from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <section className={styles.app}>
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </section>
  );
}

export default App;
