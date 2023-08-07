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
  ingredient: {
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
  }.isRequired
};

export default IngredientDetails;