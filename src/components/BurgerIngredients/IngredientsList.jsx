import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ItemIngredient from "./ItemIngredient";

const IngredientsList = (props) => {
    return(
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 24, rowGap: 32, paddingLeft: 16, paddingRight: 16}}>
            {props.ingridients && props.ingridients.map(info => <ItemIngredient info={info} key={info._id} onModal={props.onModal} offModal={props.offModal} />)}
        </div>
    );
}

export default IngredientsList;