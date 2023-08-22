import React from "react";
import styles from './IngredientDetails.module.css';
import { burgerType } from '../Utils/prop-types';
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const ingredient = useSelector(state => state.selectedIngredient.ingredient)

  return (
    <>
      <img className={styles.modalFullImage} src={ingredient.image_large} alt="изображение товара" />
      <p className={`text_type_main-medium ${styles.paragraph}`}>{ingredient.name}</p>
      <section className={styles.nutritionList}>
        <div className={styles.nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">Калории, ккал.</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </div>

        <div className={styles.nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">Белки, г.</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </div>

        <div className={styles.nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г.</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </div>

        <div className={styles.nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г.</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </div>
    </section>
    </>
  );
};

export default IngredientDetails;