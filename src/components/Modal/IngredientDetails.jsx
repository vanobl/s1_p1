import React from "react";
import NutritionsList from "./NutritionsList";
import styles from './IngredientDetails.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = (props) => {
  return (
    <>
      <img className={styles.modalFullImage} src={props.ingredient.image_large} alt="изображение товара" />
      <p className={`text_type_main-medium ${styles.paragraph}`}>{props.ingredient.name}</p>
      <NutritionsList {...props.ingredient} />
    </>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.object
};

export default IngredientDetails;