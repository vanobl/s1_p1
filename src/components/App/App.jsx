import React from 'react';
import styles from './App.module.css';
import Main from '../../pages/Main';
import Login from '../../pages/Login';
import Registration from '../../pages/Registration';
import ForgotPassword from '../../pages/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword';
import rootReducer from '../../services/reducers/rootReducer';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';

function App() {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  const enhancer = composeEnhancers();
  const store = createStore(rootReducer, enhancer);

  return (
    <Provider store={store}>
      <section className={styles.app}>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
          </BrowserRouter>
        </DndProvider>
      </section>
    </Provider>
  );
}

export default App;
