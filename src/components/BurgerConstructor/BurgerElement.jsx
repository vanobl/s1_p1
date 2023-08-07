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
};

export default BurgerElement;