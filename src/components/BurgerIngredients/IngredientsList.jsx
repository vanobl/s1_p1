import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ItemIngredient from "./ItemIngredient";
import styles from './IngredientsList.module.css'

const IngredientsList = (props) => {
    return(
        <div className={styles.ingredientList}>
            {props.ingridients && props.ingridients.map(info => <ItemIngredient info={info} key={info._id} onModal={props.onModal} offModal={props.offModal} />)}
        </div>
    );
}

export default IngredientsList;