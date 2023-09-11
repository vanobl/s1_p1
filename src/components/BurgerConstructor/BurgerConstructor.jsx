import React, { useEffect, useState } from "react";
import styles from './BurgerConstructor.module.css'
import SectionBurger from "./SectionBurger";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../Modal/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import setOrderNumber from "../../services/actions/setOrderNumber";
import showModalTogleOrder from "../../services/actions/showModalTogleOrder";
import { createOrder } from "../Utils/burger-api";


const BurgerConstructor = () => {
  const dispatch = useDispatch();
  
  const totalSum = useSelector(state => state.ingredientsInOrder.totalSum);
  const listIngredientsInOrder = useSelector(state => state.ingredientsInOrder.list);
  const modalTogle = useSelector(state => state.modalTogle.togleOrder);

  async function getCreatedOrder() {
    try {
      const idList = [];

      listIngredientsInOrder.map((item) => {
        idList.push(item._id);
      });

      const data = await createOrder(idList);

      if (data.success === true) {
        dispatch(setOrderNumber(data.order.number));
        dispatch(showModalTogleOrder())
      } else {
        alert("Ошибка формирования заказа: " + data);
      }
    } catch (err) {
      alert(err);
    }
  }

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
            onClick={getCreatedOrder}
          >Оформить заказ</Button>
        </div>
      </section>
      {modalTogle && <Modal>
        <OrderDetails />
      </Modal>}
    </div>
  );
}

export default BurgerConstructor;