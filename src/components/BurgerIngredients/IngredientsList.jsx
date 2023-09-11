import React from "react";
import ItemIngredient from "./ItemIngredient";
import styles from './IngredientsList.module.css';
import PropTypes from 'prop-types';
import { burgerType } from '../Utils/prop-types';

const IngredientsList = (props) => {
  return(
    <div className={styles.ingredientList}>
      {props.ingridients.map(info => <ItemIngredient
        info={info}
        key={info._id}
      />)}
    </div>
  );
};

IngredientsList.propTypes = {
  ingridients: PropTypes.arrayOf(
    PropTypes.shape(burgerType).isRequired
  ).isRequired
};

export default IngredientsList;