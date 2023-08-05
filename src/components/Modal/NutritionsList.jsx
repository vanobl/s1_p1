import React from "react";
import styles from './NutritionsList.module.css';
import NutritionItem from "./NutritionItem";


const NutritionsList = (props) => {
    return(
        <section className={styles.nutritionList}>
            <NutritionItem name='Калории, ккал.' info={props.calories} />
            <NutritionItem name='Белки, г.' info={props.proteins} />
            <NutritionItem name='Жиры, г.' info={props.fat} />
            <NutritionItem name='Углеводы, г.' info={props.carbohydrates} />
          </section>
    );
}


export default NutritionsList;