import React, { useEffect, useState } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './SectionBurger.module.css'
import BurgerElement from "./BurgerElement";
import { useDispatch, useSelector } from "react-redux";
import increaseAmount from "../../services/actions/increaseAmount";
import addIngredientsToOrder from "../../services/actions/addIngredientsToOrder";
import { useDrop } from "react-dnd";

const SectionBurger = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const listIngredientsInOrder = useSelector(state => state.ingredientsInOrder.list);

  function onDropHandler(ingredient) {
    dispatch(addIngredientsToOrder(ingredient));
    setLoaded(!loaded);
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      onDropHandler(itemId);
    }
  });

  // useEffect(() => {
  // }, [loaded]);

  return(
    <div className={styles.sectionBurger} ref={dropTarget}>
      {listIngredientsInOrder.filter(item => item.type === 'bun').map(ingredient => <ConstructorElement
            key={ingredient._id + '1'}
            type="top"
            isLocked={true}
            text={ingredient.name + ' (верх)'}
            price={ingredient.price}
            thumbnail={ingredient.image_mobile}
            extraClass={styles.bunTopAndBottom}
        />)}
      <div className={styles.sectionMainAndSauce}>
        {listIngredientsInOrder.filter(item => item.type !== 'bun').map(ingredinet => <BurgerElement
          key={ingredinet._id}
          name={ingredinet.name}
          price={ingredinet.price}
          id={ingredinet._id}
          image_mobile={ingredinet.image_mobile}
        />)}
      </div>
      {listIngredientsInOrder.filter(item => item.type === 'bun').map(ingredient => <ConstructorElement
            key={ingredient._id + '2'}
            type="bottom"
            isLocked={true}
            text={ingredient.name + ' (низ)'}
            price={ingredient.price}
            thumbnail={ingredient.image_mobile}
            extraClass={styles.bunTopAndBottom}
        />)}
    </div>
  );
};

export default SectionBurger;