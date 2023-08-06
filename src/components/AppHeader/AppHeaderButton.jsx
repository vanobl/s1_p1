import React, { useEffect, useState } from "react";
import classesButton from './AppHeaderButton.module.css';
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';


const AppHeaderButton = (props) => {
  const [mouseOverButton, setMouseOverButton] = useState(false);
  const [logoType, setLogoType] = useState('secondary');

  const buttonWitoutMouse = "text text_type_main-default text_color_inactive ml-2 ml-2"
  const buttonWitMouse = "text text_type_main-default ml-2 ml-2"

  function overButton() {
      if (!props.isActive) {
          setMouseOverButton(!mouseOverButton);
          setLogoType('primary');
      }
  }

  function onlyButton() {
    if (!props.isActive) {
        setMouseOverButton(!mouseOverButton);
        setLogoType('secondary');
    }
  }

  function createLogo() {
    if (props.logo === 'BurgerIcon') {
        return <BurgerIcon type={logoType} />
    } else if(props.logo === 'ListIcon') {
        return <ListIcon type={logoType} />
    } else {
        return <ProfileIcon type={logoType} />
    }
  }

  useEffect(() => {
    if (props.isActive) {
        setMouseOverButton(true);
        setLogoType('primary');
    }
  }, [])

  return (
    <a
      className={props.isActive ? classesButton.head_button_active : classesButton.head_button}
      onMouseEnter={overButton}
      onMouseLeave={onlyButton}
      href="#"
    >
      {createLogo()}<p className={mouseOverButton ? buttonWitMouse : buttonWitoutMouse}>{props.children}</p>
    </a>
  );
};

AppHeaderButton.propTypes = {
  isActive: PropTypes.bool,
  logo: PropTypes.string,
  children: PropTypes.node.isRequired
}


export default AppHeaderButton;