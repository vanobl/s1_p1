import React from "react";
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classesHeader from './AppHeader.module.css';
import AppHeaderButton from "./AppHeaderButton";


const AppHeader = () => {
    return (
        <div className={classesHeader.header}>
            <AppHeaderButton last={0} logo={<BurgerIcon type="secondary" />}>
                Конструктор
            </AppHeaderButton>
            <AppHeaderButton last={0} logo={<ListIcon type="secondary" />}>
                Лента заказов
            </AppHeaderButton>
            <div style={{display: "inline-flex", marginLeft: "auto"}}>
                <Logo />
            </div>
            <AppHeaderButton last={1} logo={<ProfileIcon type="secondary" />}>
                Личный кабинет
            </AppHeaderButton>
        </div>
    );
}


export default AppHeader;