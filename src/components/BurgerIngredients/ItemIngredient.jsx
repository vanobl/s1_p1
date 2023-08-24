import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ItemIngredient.module.css';
import PropTypes from 'prop-types';
import { burgerType } from '../Utils/prop-types';
import { useDispatch } from "react-redux";
import addSelectedIngredient from "../../services/actions/addSelectedIngredient";
import showModalTogle from "../../services/actions/showModalTogle";
import { useDrag } from "react-dnd";


const ItemIngredient = (props) => {
  const dispatch = useDispatch();
  const [{isDrag}, dragRef] = useDrag({
    type: "ingredient",
    item: props.info,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  function setIngredient() {
    dispatch(addSelectedIngredient(props.info));
    dispatch(showModalTogle());
  }

  return(
    !isDrag &&
    <div className={styles.elementStyle} onClick={() => {setIngredient()}} ref={dragRef}>
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