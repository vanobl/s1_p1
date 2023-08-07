import React from "react";
import ItemIngredient from "./ItemIngredient";
import styles from './IngredientsList.module.css';
import PropTypes from 'prop-types';

const IngredientsList = (props) => {
  return(
    <div className={styles.ingredientList}>
      {props.ingridients.map(info => <ItemIngredient
        info={info}
        key={info._id}
        onModal={props.openModal}
        offModal={props.closeModal}
      />)}
    </div>
  );
};

IngredientsList.propTypes = {
  ingridients: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default IngredientsList;