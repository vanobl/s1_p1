import React from "react";
import styles from './BurgerConstructor.module.css'
import SectionBurger from "./SectionBurger";


const BurgerConstructor = (props) => {
    return(
        <div className={styles.BurgerConstructor}>
            <SectionBurger ingridients={props.ingridients ? props.ingridients : null} />
        </div>
    );
}

export default BurgerConstructor;