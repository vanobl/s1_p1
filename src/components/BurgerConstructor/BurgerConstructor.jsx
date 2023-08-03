import React, { useEffect, useState } from "react";
import styles from './BurgerConstructor.module.css'
import SectionBurger from "./SectionBurger";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerConstructor = (props) => {
    // const [orderNumber, setOrderNumber] = useState('');
    const [total, setTotal] = useState(0);

    function getNumberOrder() {
        let stringNumber = '';

        for(let i = 0; i < 6; i++) {
            let itemNumber = Math.floor(Math.random() * 9);
            stringNumber += itemNumber;
        }

        // setOrderNumber(stringNumber);
        return stringNumber;
    }

    // useEffect(() => {
    //     getNumberOrder();
    // });

    return(
        <div className={styles.BurgerConstructor}>
            {props.ingridients && <SectionBurger ingridients={props.ingridients} setTotal={setTotal} />}
            <section>
                <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center', marginTop: '40px', marginRight: '16px', justifyContent: 'right'}}>
                    <p className="text text_type_digits-medium">{total}</p>&nbsp;
                    <CurrencyIcon type="primary" />
                    <Button htmlType="button" type="primary" size="large" extraClass="ml-10" onClick={() => {props.onModal('order', getNumberOrder())}}>Оформить заказ</Button>
                </div>
            </section>
        </div>
    );
}

export default BurgerConstructor;