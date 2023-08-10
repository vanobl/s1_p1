import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import classesHeader from './AppHeader.module.css';
import AppHeaderButton from "./AppHeaderButton";


const AppHeader = () => {
    return (
        <div className={classesHeader.header}>
            <AppHeaderButton logo="BurgerIcon" isActive={true}>
                <BurgerIcon type="secondary" />
                <p className="text text_type_main-default ml-2 ml-2">Конструктор</p>
            </AppHeaderButton>
            <AppHeaderButton logo="ListIcon" isActive={false}>
                <ListIcon type="secondary" />
                <p className="text text_type_main-default ml-2 ml-2">Лента заказов</p>
            </AppHeaderButton>
            <div className={classesHeader.headerLogo}>
                <Logo />
            </div>
            <AppHeaderButton logo="ProfileIcon" isActive={false}>
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default ml-2 ml-2">Личный кабинет</p>
            </AppHeaderButton>
        </div>
    );
}


export default AppHeader;