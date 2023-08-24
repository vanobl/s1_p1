import React, { useRef } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerElement.module.css';
import { burgerType } from '../Utils/prop-types';
import { useDispatch } from "react-redux";
import removeIngredientsFromOrder from "../../services/actions/removeIngredientsFromOrder";
import dragElementInOrder from "../../services/actions/dragElementInOrder";
import { useDrag, useDrop } from "react-dnd";

const BurgerElement = (props) => {
  const dispatch = useDispatch();
  // const ref = useRef(null);

  // const [, drop] = useDrop({
  //   accept: 'ingredient',
  //   hover: (item, monitor) => {
  //     const dragId = item.itemid;
  //     const hoverId = props.id;
  //     dispatch(dragElementInOrder(dragId, hoverId));
  //   }
  // });

  // const [{isDragging}, drag] = useDrag({
  //   type: 'ingredient',
  //   item: () => {
  //     let itemid = props.id;
  //     return { itemid };
  //   },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging()
  //   })
  // });

  // const opacity = isDragging ? 0 : 1;
  // drag(drop(ref));

  // <div className={styles.burgerElement} style={{opacity}} ref={ref}>

  return(
    <div className={styles.burgerElement}>
      <div style={{cursor: "pointer"}}>
        <DragIcon type="primary" />
      </div>
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