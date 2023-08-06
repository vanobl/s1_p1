import React from "react";
import SpaceCheckIcon from "./SpaceCheckIcon";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const OrderDetails = (props) => {
  return (
    <>
      <p className="text text_type_digits-large mt-4">{props.numberOrder}</p>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <SpaceCheckIcon>
        <CheckMarkIcon type="primary" />
      </SpaceCheckIcon>
      <p className="text text_type_main-medium mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
    </>
  );
};

OrderDetails.propTypes = {
  numberOrder: PropTypes.string
};

export default OrderDetails;