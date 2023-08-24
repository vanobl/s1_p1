import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerElement.module.css';
import { burgerType } from '../Utils/prop-types';
import { useDispatch } from "react-redux";
import removeIngredientsFromOrder from "../../services/actions/removeIngredientsFromOrder";

const BurgerElement = (props) => {
  const dispatch = useDispatch();

  return(
    <div className={styles.burgerElement}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image_mobile}
        extraClass="ml-2"
        handleClose={() => {dispatch(removeIngredientsFromOrder(props.id));}}
      />
    </div>
  );
};

BurgerElement.propTypes = burgerType;

export default BurgerElement;