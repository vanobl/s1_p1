import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerElement.module.css';
import { burgerType } from '../Utils/prop-types';

const BurgerElement = (props) => {
  return(
    <div className={styles.burgerElement}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image_mobile}
        extraClass="ml-2"
      />
    </div>
  );
};

BurgerElement.propTypes = burgerType;

export default BurgerElement;