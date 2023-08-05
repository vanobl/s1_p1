import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerElement.module.css'

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
}

export default BurgerElement;