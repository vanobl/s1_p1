import React, { useEffect, useState } from "react";
import styles from './BurgerConstructor.module.css'
import SectionBurger from "./SectionBurger";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Modal/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import setOrderNumber from "../../services/actions/setOrderNumber";
import showModalTogleOrder from "../../services/actions/showModalTogleOrder";


const BurgerConstructor = () => {
  const dispatch = useDispatch();
  
  const totalSum = useSelector(state => state.ingredientsInOrder.totalSum);
  const modalTogle = useSelector(state => state.modalTogle.togleOrder);

  function getNumberOrder() {
    let stringNumber = '';

    for (let i = 0; i < 6; i++) {
        let itemNumber = Math.floor(Math.random() * 9);
        stringNumber += itemNumber;
    }

    return stringNumber;
  }

  useEffect(() => {
    dispatch(setOrderNumber(getNumberOrder()));
  }, []);

  return(
    <div className={styles.BurgerConstructor}>
     <SectionBurger />
      <section>
        <div className={styles.ingredientSpace}>
          <p className="text text_type_digits-medium">{totalSum}</p>&nbsp;
          <CurrencyIcon type="primary" />
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="ml-10"
            onClick={() => {dispatch(showModalTogleOrder())}}
          >Оформить заказ</Button>
        </div>
      </section>
      {modalTogle && <Modal header="">
        <OrderDetails />
      </Modal>}
    </div>
  );
}

export default BurgerConstructor;