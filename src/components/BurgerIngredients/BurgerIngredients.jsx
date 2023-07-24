import React from "react";
import styles from './BurgerIngredients.module.css'
import Bookmarks from "./Bookmarks";

const BurgerIngredients = () => {
    return (
        <div className={styles.burgerIngredients}>
            <p className="text text_type_main-large pt-10">
                Соберите бургер
            </p>
            <Bookmarks />
            <p className="text text_type_main-medium pt-10">
                Булки
            </p>
        </div>
    );
}


export default BurgerIngredients;