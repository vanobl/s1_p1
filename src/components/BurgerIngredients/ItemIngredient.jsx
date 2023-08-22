import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ItemIngredient.module.css';
import PropTypes from 'prop-types';
import { burgerType } from '../Utils/prop-types';
import { useDispatch } from "react-redux";
import addSelectedIngredient from "../../services/actions/addSelectedIngredient";
import showModalTogle from "../../services/actions/showModalTogle";


const ItemIngredient = (props) => {
  const dispatch = useDispatch();

  function setIngredient() {
    dispatch(addSelectedIngredient(props.info));
    dispatch(showModalTogle());
  }

  return(
    <div className={styles.elementStyle} onClick={() => {setIngredient()}}>
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
  info: PropTypes.shape(burgerType).isRequired
};


export default ItemIngredient;