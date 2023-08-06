import React, { useState } from "react";
import styles from './BurgerIngredients.module.css'
import Bookmarks from "./Bookmarks";
import IngredientsList from "./IngredientsList";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/IngredientDetails";
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  function openModal(ingredient) {
    setIngredient(ingredient);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.burgerIngredients}>
      <p className="text text_type_main-large pt-10">
          Соберите бургер
      </p>
      <Bookmarks />
      <div className={styles.ingredientArea}>
        <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Булки</p>
        <IngredientsList
            ingridients={props.ingridients && props.ingridients.bun}
            openModal={openModal}
            closeModal={closeModal}
        />

        <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Соусы</p>
        <IngredientsList
          ingridients={props.ingridients && props.ingridients.sauce}
          openModal={openModal}
          closeModal={closeModal}
        />
          
        <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Начинки</p>
        <IngredientsList
          ingridients={props.ingridients && props.ingridients.main}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
      {isOpen && <Modal offModal={closeModal} header="Детали ингредиента">
        <IngredientDetails ingredient={ingredient} />
      </Modal>}
    </div>
  );
};

BurgerIngredients.propTypes = {
  ingridients: PropTypes.object
};


export default BurgerIngredients;