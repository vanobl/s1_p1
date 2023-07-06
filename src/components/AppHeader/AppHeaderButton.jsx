import React from "react";
import classesButton from './AppHeaderButton.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const AppHeaderButton = (props) => {
    return (
        <div className={props.last === 1 ? classesButton.last : classesButton.head_button}>
            {props.logo}<p className="text text_type_main-default ml-2">{props.children}</p>
        </div>
        
    );
};


export default AppHeaderButton;