import React from "react";
import styles from './SpaceCheckIcon.module.css'
import PropTypes from 'prop-types';

const SpaceCheckIcon = (props) => {
  return(
    <div className={styles.spaceIcon}>
      <div className={styles.icon}>
          {props.children}
      </div>
    </div>
  );
};

SpaceCheckIcon.propTypes = {
  children: PropTypes.node.isRequired
};

export default SpaceCheckIcon;