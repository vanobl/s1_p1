import React, { useEffect, useState } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './SectionBurger.module.css'

const SectionBurger = React.memo((props) => {
    const [bun, setBun] = useState(null);

    function getBun() {
        let lengthBun = props.ingridients.bun.length;
        let newBun = props.ingridients.bun[Math.floor(Math.random() * lengthBun)];
        setBun(newBun);
    }

    useEffect(() => {
        props.ingridients && getBun();
        console.log(bun);
    }, [bun]);

    return(
        <div className={styles.sectionBurger}>
            {props.ingridients && <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                extraClass="ml-8"
            />}
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                    extraClass="ml-2"
                />
            </div>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02-mobile.png"}
                extraClass="ml-8"
            />
        </div>
    );
});

export default SectionBurger;