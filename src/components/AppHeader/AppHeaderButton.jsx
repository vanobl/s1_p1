import React from "react";
import classesButton from './AppHeaderButton.module.css';
import PropTypes from 'prop-types';


const AppHeaderButton = (props) => {
  return (
    <a
      className={props.isActive ? classesButton.head_button_active : classesButton.head_button}
      href="#"
    >
     {props.children}
    </a>
  );
};

AppHeaderButton.propTypes = {
  isActive: PropTypes.bool,
  logo: PropTypes.string,
  children: PropTypes.node.isRequired
}


export default AppHeaderButton;