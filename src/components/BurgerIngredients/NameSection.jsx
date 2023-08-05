import React from "react";
import styles from './NameSection.module.css'

const NameSection = (props) => {
    const sectionNameStyle = {width: '100%'};

    return(
        <p className={`text text_type_main-medium pt-10 ${styles.nameSection}`}>
            {props.children}
        </p>
    );
}

export default NameSection;