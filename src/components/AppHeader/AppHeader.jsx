import React from "react";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import classesHeader from './AppHeader.module.css';
import AppHeaderButton from "./AppHeaderButton";


const AppHeader = () => {
    return (
        <div className={classesHeader.header}>
            <AppHeaderButton logo="BurgerIcon" isActive={true}>
                Конструктор
            </AppHeaderButton>
            <AppHeaderButton logo="ListIcon" isActive={false}>
                Лента заказов
            </AppHeaderButton>
            <div className={classesHeader.headerLogo}>
                <Logo />
            </div>
            <AppHeaderButton logo="ProfileIcon" isActive={false}>
                Личный кабинет
            </AppHeaderButton>
        </div>
    );
}


export default AppHeader;