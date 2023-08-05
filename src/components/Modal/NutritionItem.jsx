import React from "react";
import styles from './NutritionItem.module.css';

const NutritionItem = (props) => {
    return(
        <div className={styles.nutritionItem}>
            <p className="text text_type_main-default text_color_inactive">{props.name}</p>
            <p className="text text_type_digits-default text_color_inactive">{props.info}</p>
        </div>
    );
}


export default NutritionItem;