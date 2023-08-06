import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerElement.module.css'
import PropTypes from 'prop-types';

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

BurgerElement.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image_mobile: PropTypes.string
};

export default BurgerElement;