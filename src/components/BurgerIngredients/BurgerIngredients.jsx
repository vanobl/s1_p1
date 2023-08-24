import React, { useState, useEffect } from "react";
import styles from './BurgerIngredients.module.css'
import Bookmarks from "./Bookmarks";
import IngredientsList from "./IngredientsList";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/IngredientDetails";
import { getIngredients } from "../Utils/burger-api";
import { useDispatch, useSelector } from "react-redux";
import addToIngredientsList from "../../services/actions/addToIngredientsList";

const BurgerIngredients = () => {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const listIngredients = useSelector(state => state.ingredientsList.list);
  const modalTogle = useSelector(state => state.modalTogle.togle);

  async function fillData() {
    try {
      let data = await getIngredients();
      data.data.map(ingredient => dispatch(addToIngredientsList(ingredient)));
      setLoaded(true);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    fillData();
  }, []);

  return (
    <div className={styles.burgerIngredients}>
      <p className="text text_type_main-large pt-10">
          Соберите бургер
      </p>
      <Bookmarks />
      <div className={styles.ingredientArea} id="scrollList">
        {listIngredients["bun"] &&
          <>
            <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Булки</p>
            <IngredientsList
              ingridients={listIngredients["bun"]}
            />
          </>
        }
        {listIngredients["sauce"] &&
          <>
            <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Соусы</p>
            <IngredientsList
              ingridients={listIngredients["sauce"]}
            />
          </>
        }
        {listIngredients["main"] &&
          <>
            <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>Начинки</p>
            <IngredientsList
              ingridients={listIngredients["main"]}
            />
          </>
        }
      </div>
      {modalTogle && <Modal header="Детали ингредиента">
        <IngredientDetails />
      </Modal>}
    </div>
  );
};

export default BurgerIngredients;