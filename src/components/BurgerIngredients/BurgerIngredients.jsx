import React, { useEffect, useState } from "react";
import styles from './BurgerIngredients.module.css'
import Bookmarks from "./Bookmarks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsList from "./IngredientsList";
import NameSection from "./NameSection";

const BurgerIngredients = (props) => {
    return (
        <div className={styles.burgerIngredients}>
            <p className="text text_type_main-large pt-10">
                Соберите бургер
            </p>
            <Bookmarks />
            <NameSection>Булки</NameSection>
            <IngredientsList ingridients={props.ingridients && props.ingridients.bun} />

            <NameSection>Соусы</NameSection>
            <IngredientsList ingridients={props.ingridients && props.ingridients.sauce} />
            
            <NameSection>Начинки</NameSection>
            <IngredientsList ingridients={props.ingridients && props.ingridients.main} />
        </div>
    );
}


export default BurgerIngredients;