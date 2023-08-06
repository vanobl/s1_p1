import React from "react";
import styles from './IngredientDetails.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = (props) => {
  return (
    <>
      <img className={styles.modalFullImage} src={props.ingredient.image_large} alt="изображение товара" />
      <p className={`text_type_main-medium ${styles.paragraph}`}>{props.ingredient.name}</p>
      <section className={styles.nutritionList}>
        <div className={styles.nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">Калории, ккал.</p>
          <p className="text text_type_digits-default text_color_inactive">{props.ingredient.calories}</p>
        </div>

        <div className={styles.nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">Белки, г.</p>
          <p className="text text_type_digits-default text_color_inactive">{props.ingredient.proteins}</p>
        </div>

        <div className={styles.nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г.</p>
          <p className="text text_type_digits-default text_color_inactive">{props.ingredient.fat}</p>
        </div>

        <div className={styles.nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г.</p>
          <p className="text text_type_digits-default text_color_inactive">{props.ingredient.carbohydrates}</p>
        </div>
    </section>
    </>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.object
};

export default IngredientDetails;