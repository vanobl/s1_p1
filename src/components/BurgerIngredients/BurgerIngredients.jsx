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
            <div className={styles.ingredientArea}>
                <NameSection>Булки</NameSection>
                <IngredientsList
                    ingridients={props.ingridients && props.ingridients.bun}
                    onModal={props.onModal}
                    offModal={props.offModal}
                />

                <NameSection>Соусы</NameSection>
                <IngredientsList ingridients={props.ingridients && props.ingridients.sauce} onModal={props.onModal} offModal={props.offModal} />
                
                <NameSection>Начинки</NameSection>
                <IngredientsList ingridients={props.ingridients && props.ingridients.main} onModal={props.onModal} offModal={props.offModal} />
            </div>
        </div>
    );
}


export default BurgerIngredients;