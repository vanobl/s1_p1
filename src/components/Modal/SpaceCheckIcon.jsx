import React from "react";
import styles from './SpaceCheckIcon.module.css'

const SpaceCheckIcon = (props) => {
    return(
        <div className={styles.spaceIcon}>
            <div className={styles.icon}>
                {props.children}
            </div>
        </div>
    );
}

export default SpaceCheckIcon;