import React from "react";
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classesHeader from './AppHeader.module.css';


const AppHeader = () => {
    //<div style={{display: "inline-block"}} className="text text_type_main-default">Конструктор</div>

    return (
        <div className="{classesHeader.header} pt-4 pb-4" style={{display: "flex", flexDirection: 'row', alignContent: "space-around"}}>
            <div style={{display: "inline-flex", padding: "16px 20px", cursor: "pointer"}}>
                <BurgerIcon type="primary" /><p className="text text_type_main-default ml-2">Конструктор</p>
            </div>

            <div style={{display: "inline-flex", padding: "16px 20px", cursor: "pointer"}}>
                <ListIcon type="primary" /><p className="text text_type_main-default ml-2">Лента заказов</p>
            </div>
            <div style={{display: "inline-flex", marginLeft: "auto"}}>
                <Logo />
            </div>

            <div style={{display: "inline-flex", padding: "16px 20px", cursor: "pointer", marginLeft: "auto"}}>
                <ProfileIcon type="primary" /><p className="text text_type_main-default ml-2">Личный кабинет</p>
            </div>
        </div>
    );
}


export default AppHeader;