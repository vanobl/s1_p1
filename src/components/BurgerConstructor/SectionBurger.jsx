import React, { useEffect } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './SectionBurger.module.css'
import BurgerElement from "./BurgerElement";
import { useDispatch } from "react-redux";
import increaseAmount from "../../services/actions/increaseAmount";
import { useDrop } from "react-dnd";

const SectionBurger = React.memo(() => {
  const dispatch = useDispatch();

  function onDropHandler(id) {
    console.log(id);
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {
      onDropHandler(itemId);
    }
  });

  const sums = [1255, 988, 1337, 3000, 300, 874, 90, 1255];

  useEffect(() => {
    sums.map(itemSum => dispatch(increaseAmount(itemSum)));
  }, []);

  return(
    <div className={styles.sectionBurger} ref={dropTarget}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={1255}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        extraClass={styles.bunTopAndBottom}
      />
      <div className={styles.sectionMainAndSauce}>
        <BurgerElement
          key={"643d69a5c3f7b9001cfa093e"}
          name={"Филе Люминесцентного тетраодонтимформа"}
          price={988}
          image_mobile={"https://code.s3.yandex.net/react/code/meat-03-mobile.png"}
        />
        <BurgerElement
          key={"643d69a5c3f7b9001cfa093f"}
          name={"Мясо бессмертных моллюсков Protostomia"}
          price={1337}
          image_mobile={"https://code.s3.yandex.net/react/code/meat-02-mobile.png"}
        />
        <BurgerElement
          key={"643d69a5c3f7b9001cfa0940"}
          name={"Говяжий метеорит (отбивная)"}
          price={3000}
          image_mobile={"https://code.s3.yandex.net/react/code/meat-04-mobile.png"}
        />
        <BurgerElement
          key={"643d69a5c3f7b9001cfa0946"}
          name={"Хрустящие минеральные кольца"}
          price={300}
          image_mobile={"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png"}
        />
        <BurgerElement
          key={"643d69a5c3f7b9001cfa0947"}
          name={"Плоды Фалленианского дерева"}
          price={874}
          image_mobile={"https://code.s3.yandex.net/react/code/sp_1-mobile.png"}
        />
        <BurgerElement
          name={"Соус Spicy-X"}
          price={90}
          image_mobile={"https://code.s3.yandex.net/react/code/sauce-02-mobile.png"}
        />
      </div>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price="1255"
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        extraClass={styles.bunTopAndBottom}
      />
    </div>
  );
});

export default SectionBurger;