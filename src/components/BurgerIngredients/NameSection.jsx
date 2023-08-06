import React from "react";
import styles from './NameSection.module.css';
import PropTypes from 'prop-types';

const NameSection = (props) => {
  return(
    <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>
        {props.children}
    </p>
  );
};

NameSection.propTypes = {
  children: PropTypes.node.isRequired
};

export default NameSection;