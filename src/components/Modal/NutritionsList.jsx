import React from "react";
import styles from './NutritionsList.module.css';
import NutritionItem from "./NutritionItem";
import PropTypes from 'prop-types';


const NutritionsList = (props) => {
  return(
    <section className={styles.nutritionList}>
      <NutritionItem name='Калории, ккал.' info={props.calories} />
      <NutritionItem name='Белки, г.' info={props.proteins} />
      <NutritionItem name='Жиры, г.' info={props.fat} />
      <NutritionItem name='Углеводы, г.' info={props.carbohydrates} />
    </section>
  );
};

NutritionsList.propTypes = {
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
};


export default NutritionsList;