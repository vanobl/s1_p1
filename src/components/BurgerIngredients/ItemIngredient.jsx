import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ItemIngredient.module.css'


const ItemIngredient = (props) => {
    return(
        <div className={styles.elementStyle}>
            <img className={styles.elementImage} src={props.image} alt="изображение товара" />
            <div className={styles.elementPrice}>
                <p className="text text_type_digits-default">{props.price}</p>&nbsp;
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-small" style={{width: '100%', textAlign: 'center', verticalAlign: 'top'}}>{props.name}</p>
        </div>
    );
}


export default ItemIngredient;