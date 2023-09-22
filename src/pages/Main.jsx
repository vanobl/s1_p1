import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";

const Main = () => {
  return (
    <>
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </>
  );
}

export default Main;