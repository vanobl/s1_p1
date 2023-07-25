import React from "react";

const NameSection = (props) => {
    const sectionNameStyle = {width: '100%'};

    return(
        <p className="text text_type_main-medium pt-10" style={sectionNameStyle}>
            {props.children}
        </p>
    );
}

export default NameSection;