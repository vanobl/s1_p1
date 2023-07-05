import React from "react";
import classesButton from './AppHeaderButton.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const AppHeaderButton = (props) => {
    return (
        //style={{display: "inline-flex", padding: "16px 20px", cursor: "pointer"}}
        {props.logo === 'logo' ? (<div style={{display: "inline-flex", marginLeft: "auto"}}>
                <Logo />
            </div>)
            : (<div className={props.last === 1 ? classesButton.last : classesButton.head_button}>
                <BurgerIcon type="primary" /><p className="text text_type_main-default ml-2">{props.children}</p>
            </div>)
        }
        
    );
};


export default AppHeaderButton;