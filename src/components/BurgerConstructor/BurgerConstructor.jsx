import React, { useEffect } from "react";
import styles from './BurgerConstructor.module.css'
import SectionBurger from "./SectionBurger";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerConstructor = (props) => {
    return(
        <div className={styles.BurgerConstructor}>
            <SectionBurger ingridients={props.ingridients} />
            <section>
                <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center', marginTop: '40px', marginRight: '16px', justifyContent: 'right'}}>
                    <p className="text text_type_digits-medium">634</p>&nbsp;
                    <CurrencyIcon type="primary" />
                    <Button htmlType="button" type="primary" size="large" extraClass="ml-10">Оформить заказ</Button>
                </div>
            </section>
        </div>
    );
}

export default BurgerConstructor;