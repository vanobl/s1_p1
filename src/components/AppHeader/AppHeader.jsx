import React from "react";
import { BurgerIcon, Button, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import classesHeader from './AppHeader.module.css';


const AppHeader = () => {
    return (
        <div className={classesHeader.header}>
            <div style={{width: 200, display: "inline-block", verticalAlign: "middle", padding: "16px 20px"}}>
                <BurgerIcon type="primary" /> <div style={{display: "inline-block"}} className="text text_type_main-default">Конструктор</div>
            </div>
            <Logo />
        </div>
    );
}


export default AppHeader;