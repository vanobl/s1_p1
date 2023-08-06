import React from "react";
import ItemIngredient from "./ItemIngredient";
import styles from './IngredientsList.module.css';
import PropTypes from 'prop-types';

const IngredientsList = (props) => {
  return(
    <div className={styles.ingredientList}>
      {props.ingridients && props.ingridients.map(info => <ItemIngredient
        info={info}
        key={info._id}
        onModal={props.openModal}
        offModal={props.closeModal}
      />)}
    </div>
  );
};

IngredientsList.propTypes = {
  ingridients: PropTypes.object,
  openModal: PropTypes.func,
  closeModal: PropTypes.func
};

export default IngredientsList;