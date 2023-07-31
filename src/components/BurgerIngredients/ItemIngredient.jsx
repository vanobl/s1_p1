import React, { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ItemIngredient.module.css'
import Modal from "../Modal/Modal";


const ItemIngredient = (props) => {
    return(
        <div className={styles.elementStyle} onClick={() => {props.onModal('Пробное окно ' + props.info.name, props.info)}}>
            <img className={styles.elementImage} src={props.info.image} alt="изображение товара" />
            <div className={styles.elementPrice}>
                <p className="text text_type_digits-default">{props.info.price}</p>&nbsp;
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-small" style={{width: '100%', textAlign: 'center', verticalAlign: 'top'}}>{props.info.name}</p>
        </div>
    );
}


export default ItemIngredient;