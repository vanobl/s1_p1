import React from "react";
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classesHeader from './AppHeader.module.css';
import AppHeaderButton from "./AppHeaderButton";


const AppHeader = () => {
    const listNameMenu = [
        {logo: 'burger', name: 'Конструктор', last: 0},
        {logo: 'list', name:'Лента заказов', last: 0},
        {logo: 'logo', name: 'Лого', last: 0},
        {logo: 'profile', name: 'Личный кабинет', last: 1}
    ]

    return (
        <div className={classesHeader.header}>
            <AppHeaderButton last={0} logo={<BurgerIcon type="secondary" />}>
                Конструктор
            </AppHeaderButton>
            <AppHeaderButton last={0} logo={<ListIcon type="primary" />}>
                Лента заказов
            </AppHeaderButton>
            <div style={{display: "inline-flex", marginLeft: "auto"}}>
                <Logo />
            </div>
            <AppHeaderButton last={1} logo={<ProfileIcon type="primary" />}>
                Личный кабинет
            </AppHeaderButton>
            {/* {listNameMenu.map(nameItem => <AppHeaderButton logo={nameItem.logo} last={nameItem.last}>{nameItem.name}</AppHeaderButton>)} */}

            {/* this.listNameMenu.map((itemName) => <AppHeaderButton>itemName</AppHeaderButton>); */}
            {/* <div style={{display: "inline-flex", padding: "16px 20px", cursor: "pointer"}}>
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
            </div> */}
        </div>
    );
}


export default AppHeader;