import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './SectionBurger.module.css'
import BurgerElement from "./BurgerElement";
import PropTypes from 'prop-types';

const SectionBurger = React.memo((props) => {
  let total = 0;

  function getBun() {
    let lengthBun = props.ingridients.bun.length;
    let newBun = props.ingridients.bun[Math.floor(Math.random() * lengthBun)];
    total += Number(newBun.price * 2);
    return newBun;
  }

  function getMain() {
    let lengthMain = props.ingridients.main.length;
    let maxIngredients = Math.floor(Math.random() * 5);
    let ingredients = [];

    for (let i = 0; i < maxIngredients; i++){
      let forWhile = true;
      while (forWhile) {
        let ingredient = props.ingridients.main[Math.floor(Math.random() * lengthMain)];

        if(!ingredients.includes(ingredient)) {
          ingredients.push(ingredient);
          forWhile = false;
          total += ingredient.price;
        }
      }
    }

    return ingredients;
  }

  function getSauce() {
    let lengthSauce = props.ingridients.bun.length;
    let newSauce = props.ingridients.sauce[Math.floor(Math.random() * lengthSauce)];
    total += newSauce.price;
    return newSauce;
  }

  let bun = getBun();
  let bunNameTop = bun.name + " (верх)";
  let bunNameBottom = bun.name + " (низ)";
  let bunIdTop = bun._id + "_top";
  let bunIdBottom = bun._id + "_bottom";
  let ingredients = getMain();
  let sauce = getSauce();

  return(
    <div className={styles.sectionBurger}>
      {props.ingridients && <ConstructorElement
        type="top"
        isLocked={true}
        text={bunNameTop}
        price={bun.price}
        thumbnail={bun.image_mobile}
        extraClass={styles.bunTopAndBottom}
        key={bunIdTop}
      />}
      {ingredients.map(info => <BurgerElement {...info} key={info._id} />)}
      <BurgerElement {...sauce} />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={bunNameBottom}
        price={bun.price}
        thumbnail={bun.image_mobile}
        extraClass={styles.bunTopAndBottom}
        key={bunIdBottom}
      />
    </div>
  );
});

SectionBurger.propTypes = {
  ingridients: PropTypes.object
};

export default SectionBurger;