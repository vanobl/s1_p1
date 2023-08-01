import React, { useEffect, useState } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css'

const SectionBurger = (props) => {
    const [burger, setBurger] = useState([]);
    // function getBun() {
    //     setBun(props.ingridients.bun[Math.floor(Math.random() * props.ingridients.bun.length)]);
    // }

    // function getSauce() {}

    // function getMain() {}

    useEffect(() => {
        let bun = props.ingridients ? props.ingridients.bun[Math.floor(Math.random() * props.ingridients.bun.length)] : {};
        setBurger(...burger, bun);

        let sauce = props.ingridients ? props.ingridients.sauce[Math.floor(Math.random() * props.ingridients.bun.length)] : {};
        setBurger(...burger, bun);

        for(let i = 0; i < props.ingridients.main.length; i++) {
            let main = props.ingridients ? props.ingridients.main[Math.floor(Math.random() * props.ingridients.bun.length)] : {};
        }
        // setBun(props.ingridients ? props.ingridients.bun[Math.floor(Math.random() * props.ingridients.bun.length)] : {});
        console.log(props.ingridients ? props.ingridients.bun[Math.floor(Math.random() * props.ingridients.bun.length)] : []);
    }, [props.ingridients]);

    return(
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
            />
            <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
            />
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
            />
        </div>
    );
}

export default SectionBurger;