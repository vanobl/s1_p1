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
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'ingredient',
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.ind;
      const hoverIndex = props.ind;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffcet = monitor.getClientOffset();
      const hoverClientY = clientOffcet.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(dragElementInOrder(dragIndex, hoverIndex));

      // item.ind = hoverIndex;
    }
  });

  const [{isDragging}, drag] = useDrag({
    type: 'ingredient',
    item: () => {
      let ind = props.ind;
      return { ind };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  // <div className={styles.burgerElement} style={{opacity}} ref={ref}>

  return(
    <div className={styles.burgerElement} ref={ref} style={{opacity}}>
      <div style={{cursor: "pointer"}}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image_mobile}
        extraClass="ml-2"
        handleClose={() => {dispatch(removeIngredientsFromOrder(props.ind));}}
      />
    </div>
  );
};

BurgerElement.propTypes = burgerType;

export default BurgerElement;