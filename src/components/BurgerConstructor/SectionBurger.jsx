import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './SectionBurger.module.css'
import BurgerElement from "./BurgerElement";

const SectionBurger = React.memo((props) => {
    let total = 0;

    function getBun() {
        let lengthBun = props.ingridients.bun.length;
        let newBun = props.ingridients.bun[Math.floor(Math.random() * lengthBun)];
        total += Number(newBun.price * 2);
        return newBun;
    }

    function getMain() {
        let lengthMain = props.ingridients.main.length;
        let maxIngredients = Math.floor(Math.random() * 5);
        let ingredients = [];

        for(let i = 0; i < maxIngredients; i++){
            let forWhile = true;
            while(forWhile) {
                let ingredient = props.ingridients.main[Math.floor(Math.random() * lengthMain)];

                if(!ingredients.includes(ingredient)) {
                    ingredients.push(ingredient);
                    forWhile = false;
                    total += ingredient.price;
                }
            }
        }

        props.setTotal(total);

        return ingredients;
    }

    function getSauce() {
        let lengthSauce = props.ingridients.bun.length;
        let newSauce = props.ingridients.sauce[Math.floor(Math.random() * lengthSauce)];
        total += newSauce.price;
        props.setTotal(total);
        return newSauce;
    }

    let bun = getBun();
    let ingredients = getMain();
    let sauce = getSauce();

    return(
        <div className={styles.sectionBurger}>
            {props.ingridients && <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image_mobile}
                extraClass="ml-8"
            />}
            {ingredients.map(info => <BurgerElement {...info} />)}
            <BurgerElement {...sauce} />
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image_mobile}
                extraClass="ml-8"
            />
        </div>
    );
});

export default SectionBurger;