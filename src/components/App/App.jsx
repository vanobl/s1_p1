import React from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import rootReducer from '../../services/reducers/rootReducer';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  const enhancer = composeEnhancers();
  const store = createStore(rootReducer, enhancer);

  return (
    <Provider store={store}>
      <section className={styles.app}>
        <DndProvider backend={HTML5Backend}>
          <AppHeader />
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </section>
    </Provider>
  );
}

export default App;
