import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classesHeader from './AppHeader.module.css';
import AppHeaderButton from "./AppHeaderButton";


const AppHeader = () => {
    return (
        <div className={classesHeader.header}>
            <AppHeaderButton logo="BurgerIcon" link="/">
                <BurgerIcon type="secondary" />
                <p className="text text_type_main-default ml-2 ml-2">Конструктор</p>
            </AppHeaderButton>
            <AppHeaderButton logo="ListIcon" link='/order-feed'>
                <ListIcon type="secondary" />
                <p className="text text_type_main-default ml-2 ml-2">Лента заказов</p>
            </AppHeaderButton>
            <div className={classesHeader.headerLogo}>
                <Logo />
            </div>
            <AppHeaderButton logo="ProfileIcon" link="/login">
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default ml-2 ml-2">Личный кабинет</p>
            </AppHeaderButton>
        </div>
    );
}


export default AppHeader;