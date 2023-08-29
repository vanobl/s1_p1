import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './SectionBurger.module.css'
import BurgerElement from "./BurgerElement";
import { useDispatch, useSelector } from "react-redux";
import increaseAmount from "../../services/actions/increaseAmount";
import addIngredientsToOrder from "../../services/actions/addIngredientsToOrder";
import { useDrop } from "react-dnd";

const SectionBurger = () => {
  const dispatch = useDispatch();

  const listIngredientsInOrder = useSelector(state => state.ingredientsInOrder.list);
  const lastUpdate = useSelector(state => state.ingredientsInOrder.lastUpdate);

  function onDropHandler(ingredient) {
    dispatch(addIngredientsToOrder(ingredient));
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      onDropHandler(itemId);
    }
  }, [lastUpdate]);

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
        {listIngredientsInOrder.map((ingredinet, index) => {
          if (ingredinet.type !== 'bun') {
            const itemKey = ingredinet._id + '-' + index;

            return <BurgerElement
            key={itemKey}
            name={ingredinet.name}
            price={ingredinet.price}
            id={ingredinet._id}
            image_mobile={ingredinet.image_mobile}
            ind={index}
            />
          }
        })}
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