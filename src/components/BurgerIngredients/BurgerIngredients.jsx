import React, { useState, useEffect } from "react";
import styles from './BurgerIngredients.module.css'
import Bookmarks from "./Bookmarks";
import IngredientsList from "./IngredientsList";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/IngredientDetails";
import PropTypes from 'prop-types';
import { burgerType } from '../Utils/prop-types';
import { getIngredients } from "../Utils/burger-api";
import { useDispatch, useSelector } from "react-redux";
import addToIngredientsList from "../../services/actions/addToIngredientsList";

const BurgerIngredients = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  const dispatch = useDispatch();

  const listIngredients = useSelector(state => state.ingredientsList.list);

  async function fillData() {
    try {
      let data = await getIngredients();
      data.data.map(ingredient => dispatch(addToIngredientsList(ingredient)));
    } catch (err) {
      alert(err);
    }
  }

  function openModal(ingredient) {
    setIngredient(ingredient);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // useEffect(() => {
  //   fillData();
  // }, []);
  fillData();

  return (
    <div className={styles.burgerIngredients}>
      <p className="text text_type_main-large pt-10">
          Соберите бургер
      </p>
      <Bookmarks />
      <div className={styles.ingredientArea}>
        <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Булки</p>
        <IngredientsList
          ingridients={listIngredients["bun"]}
          openModal={openModal}
          closeModal={closeModal}
        />

        <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Соусы</p>
        <IngredientsList
          ingridients={props.ingridients.sauce}
          openModal={openModal}
          closeModal={closeModal}
        />
          
        <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Начинки</p>
        <IngredientsList
          ingridients={props.ingridients.main}
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
  ingridients: PropTypes.shape(
    PropTypes.arrayOf(
      PropTypes.shape(burgerType).isRequired
    ).isRequired
  ).isRequired
};


export default BurgerIngredients;