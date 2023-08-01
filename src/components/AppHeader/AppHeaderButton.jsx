import React, { useState } from "react";
import classesButton from './AppHeaderButton.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";


const AppHeaderButton = (props) => {
    const [mouseOverButton, setMouseOverButton] = useState(false);
    const [logoType, setLogoType] = useState('secondary');

    const buttonWitoutMouse = "text text_type_main-default text_color_inactive ml-2 ml-2"
    const buttonWitMouse = "text text_type_main-default ml-2 ml-2"

    function overButton() {
        setMouseOverButton(!mouseOverButton);
        setLogoType('primary');
    }

    function onlyButton() {
        setMouseOverButton(!mouseOverButton);
        setLogoType('secondary');
    }

    function createLogo() {
        if(props.logo === 'BurgerIcon') {
            return <BurgerIcon type={logoType} />
        } else if(props.logo === 'ListIcon') {
            return <ListIcon type={logoType} />
        } else {
            return <ProfileIcon type={logoType} />
        }
    }

    return (
        <div className={props.last === 1 ? classesButton.last : classesButton.head_button} onMouseEnter={overButton} onMouseLeave={onlyButton}>
            {createLogo()}<p className={mouseOverButton ? buttonWitMouse : buttonWitoutMouse}>{props.children}</p>
        </div>
        
    );
};


export default AppHeaderButton;