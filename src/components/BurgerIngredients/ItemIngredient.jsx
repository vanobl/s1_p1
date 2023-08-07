import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ItemIngredient.module.css';
import PropTypes from 'prop-types';


const ItemIngredient = (props) => {
  return(
    <div className={styles.elementStyle} onClick={() => {props.onModal(props.info)}}>
      <img className={styles.elementImage} src={props.info.image} alt="изображение товара" />
      <div className={styles.elementPrice}>
        <p className="text text_type_digits-default">{props.info.price}</p>&nbsp;
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-small ${styles.elementDescription}`}>{props.info.name}</p>
    </div>
  );
};

ItemIngredient.propTypes = {
  onModal: PropTypes.func,
  info: PropTypes.shape({
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
};


export default ItemIngredient;