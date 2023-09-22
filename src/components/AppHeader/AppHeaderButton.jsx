import React from "react";
import classesButton from './AppHeaderButton.module.css';
import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router-dom";


const AppHeaderButton = (props) => {
  const url = props.link ? props.link : "#";
  
  return (
    <NavLink
      to={{ pathname: url }}
      end
      className={({isActive, isPending}) => isActive ? classesButton.head_button_active : classesButton.head_button}
    >
      {props.children}
    </NavLink>
  );
};

AppHeaderButton.propTypes = {
  isActive: PropTypes.bool,
  logo: PropTypes.string,
  children: PropTypes.node.isRequired
}


export default AppHeaderButton;