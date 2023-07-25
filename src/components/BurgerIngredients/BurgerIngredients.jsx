import React, { useEffect, useState } from "react";
import styles from './BurgerIngredients.module.css'
import Bookmarks from "./Bookmarks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = (props) => {
    let sectionNameStyle = {width: '100%'};
    let elementStyle = {
        width: 272,
        height: 208,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    };

    return (
        <div className={styles.burgerIngredients}>
            <p className="text text_type_main-large pt-10">
                Соберите бургер
            </p>
            <Bookmarks />
            <p className="text text_type_main-medium pt-10" style={sectionNameStyle}>
                Булки
            </p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 24, rowGap: 32, paddingLeft: 16, paddingRight: 16}}>
                {props.ingridients && props.ingridients.bun.map(info => <div style={elementStyle} key={info._id}>
                    <img style={{width: 240, height: 120, marginLeft: 16, marginRight: 16}} src={info.image} />
                    <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', marginTop: 4, marginBottom: 4, height: 24}}>
                        <p className="text text_type_digits-default">{info.price}</p>&nbsp;
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-small" style={{width: '100%', textAlign: 'center'}}>{info.name}</p>
                </div>)}
            </div>
            <p className="text text_type_main-medium pt-10" style={sectionNameStyle}>
                Соусы
            </p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 24, rowGap: 32, paddingLeft: 16, paddingRight: 16}}>
                {props.ingridients && props.ingridients.sauce.map(info => <div style={elementStyle} key={info._id}>
                    <img style={{width: 240, height: 120, marginLeft: 16, marginRight: 16}} src={info.image} />
                    <p className="text text_type_digits-default">{info.price}</p>&nbsp;
                    <CurrencyIcon type="primary" />
                    <p className="text text_type_main-small" style={{width: '100%', textAlign: 'center'}}>{info.name}</p>
                    </div>)}
            </div>
            <p className="text text_type_main-medium pt-10" style={sectionNameStyle}>
                Начинки
            </p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, paddingLeft: 16, paddingRight: 16}}>
                {props.ingridients && props.ingridients.main.map(info => <div style={elementStyle} key={info._id}><img src={info.image} /><p className="text text_type_digits-medium">{info.price}</p><CurrencyIcon type="primary" /><p className="text text_type_main-small" style={{width: '100%'}}>{info.name}</p></div>)}
            </div>
        </div>
    );
}


export default BurgerIngredients;